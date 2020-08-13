/**
 * 滚动动画函数
 *
 * @export
 * @param {(HTMLElement | Window)} el
 * @param {number} [from=0]
 * @param {number} to
 * @param {number} [duration=500]
 */
export function scroll_to(el: HTMLElement | Window, from: number = 0, to: number, duration: number = 500): void {
  function callback() {
    return window.setTimeout(callback, 1000 / 60);
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
        window.webkitRequestAnimationFrame ||
        (window as any).mozRequestAnimationFrame ||
        (window as any).msRequestAnimationFrame ||
        callback
    );
  }

  const difference = Math.abs(from - to);
  const scroll_step = Math.ceil(difference / duration * 50);

  function scroll(start: number, end: number, step: number) {
    if (start === end) {
      return;
    }

    let d = (start + step > end) ? end : start + step;

    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      (el as HTMLElement).scrollTop = d;
    }

    window.requestAnimationFrame(() => scroll(d, end, step));
  }

  scroll(from, to, scroll_step);
}

/**
 * 遍历滚动函数
 *
 * @export
 * @param {number} [target_top=0]
 * @param {number} [duration=500]
 */
export function from_current_top_scroll_to(target_top: number = 0, duration: number = 500): void {
  const current_top = document.documentElement!.scrollTop || document.body.scrollTop;

  scroll_to(window, current_top, target_top, duration);
}

/**
 * 图片懒加载
 *
 * @export
 * @param {string}
 */
export function lazyload_img_html(html: string): string {
  // return (html || '').replace('src', ' class="lazyload can_view_img" data-src');
  // return (html || '').replace('src', ' class="lazyload can_view_img" title="双击显示大图" src');
  // 先将图片替换为 1px gif，显示时在替换为真实图片 (从 data-src 中取出)
  const gif_1px = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';
  const title = ' title="双击查看大图" ';
  const img_re = /<img(.*?)>/ig;
  const src_re = /src/gi;
  const class_src_re = /class="(.*?)".*(src)/gi;
  const src_class_re = /(src).*class="(.*?)"/gi;
  const class_src_replacer = (p1_match: string, p1_1: string, p1_2: string) => p1_match
    .replace(p1_1, p1_1 + ' lazyload can_view_img')
    .replace(p1_2, `src="${gif_1px}" data-src`);
  const src_class_replacer = (p1_match: string, p1_1: string, p1_2: string) => p1_match
    .replace(p1_2, p1_2 + ' lazyload can_view_img')
    .replace(p1_1, `src="${gif_1px}" data-src`);

  if (html.search(img_re) === -1) { return html; }

  return html.replace(img_re, (match: string, p1: string) => {
    let new_str = p1;

    // if (p1.search(src_re) !== -1) {
    //   new_str = p1.replace(src_re, `src="${gif_1px}" data-src`) + ' class="lazyload can_view_img" ' + title;
    // } else if (p1.search(class_src_re) !== -1) {
    //   new_str = p1.replace(class_src_re, class_src_replacer) + title;
    // } else if (p1.search(src_class_re) !== -1) {
    //   new_str = p1.replace(src_class_re, src_class_replacer) + title;
    // } else {
    //   new_str = ' class="lazyload can_view_img" ' + title + p1;
    // }

    if (p1.search(class_src_re) !== -1) {
      new_str = p1.replace(class_src_re, class_src_replacer) + title;
    } else if (p1.search(src_class_re) !== -1) {
      new_str = p1.replace(src_class_re, src_class_replacer) + title;
    } else if (p1.search(src_re) !== -1) {
      new_str = p1.replace(src_re, `src="${gif_1px}" data-src`) + ' class="lazyload can_view_img" ' + title;
    } else {
      new_str = ' class="lazyload can_view_img" ' + title + p1;
    }

    return match.replace(p1, new_str);
  });
}

/**
 * useFormDownload function - 通过 form 下载文件
 *
 * @param  {String} method http method
 * @param  {String} action 后端接口
 * @param  {Object} params 请求参数
 * @return {Void}
 */
export async function use_form_download(method: string, action: string, params: any = {}) {
  const inputs = Object.keys(params).map((key) => {
      return `<input type="hidden" name="${key}" value='${params[key]}'/>`;
  }).join('');

  const $form = document.createElement('form');

  $form.action = action;
  $form.method = method;
  $form.innerHTML = inputs;

  document.body.appendChild($form);

  $form.submit();

  setTimeout(() => {
    node_remove($form);
  }, 10000);
}

/**
 * use_iframe_download function - 通过 iframe 下载文件
 *
 * @param  {String} download_path 需下载文件的链接
 * @return {Void}
 */
export async function use_iframe_download(download_path: string) {

  const $iframe = document.createElement('iframe');

  $iframe.style.height = '0px';
  $iframe.style.width = '0px';
  document.body.appendChild($iframe);
  $iframe.setAttribute('src', download_path);

  setTimeout(() => { node_remove($iframe); }, 20000);
}

/** 删除节点 */
export function node_remove(dom: HTMLElement) {
  try {
    if (dom.remove) {
      dom.remove();
    } else if ((dom as any).removeNode) {
      (dom as any).removeNode();
    }
  } catch (e) {}
}

/** 获取图片的宽高 */
export function get_image_dom_natural_wh(img_dom: HTMLImageElement): Promise<{width: number, height: number}> {
  return new Promise((resolve) => {
    if (img_dom.naturalWidth && img_dom.naturalHeight) {
      return resolve({ width: img_dom.naturalWidth, height: img_dom.naturalHeight });
    } else {
      const img = new Image();

      img.src = img_dom.src;
      img.onload = () => {
        return resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        return resolve({ width: 0, height: 0 });
      };
    }
  });
}

/** 根据图片 url 获取图片的宽高 */
export function get_image_natural_wh(url: string): Promise<{width: number, height: number}> {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = url;
    img.onload = () => {
      return resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      return resolve({ width: 0, height: 0 });
    };
  });
}

/**
 * 获取滚动条宽度
 */
let scroll_bar_width: number | null = null;
export function get_scroll_bar_width(): number {
  if (scroll_bar_width !== null) { return scroll_bar_width; }

  const outer = document.createElement('div');
  outer.className = 'scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode!.removeChild(outer);
  scroll_bar_width = widthNoScroll - widthWithScroll;

  return scroll_bar_width;
}

/**
 * 适配
 * @param { stirng } class_name
 * @param { string } bigger - 大于分界宽度的样式
 * @param { string } smaller - 小于分界宽度的样式
 * @param { number } split - 分界宽度，默认1200
 */
export function reset_media(class_name: string, bigger: string, smaller: string, split = 1200) {
  const contain_class_arr = document.getElementsByClassName(class_name);
  Array.prototype.forEach.call(contain_class_arr, (item) => {
    if (window.innerWidth >= split) {
      item.setAttribute('style', bigger);
    } else {
      item.setAttribute('style', smaller);
    }
  });
}
