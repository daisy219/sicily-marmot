/**
 * ### js使用canvas将文字转换成图像数据base64
 * - text: 文字内容
 * - fontsize: 字体大小
 * - fontcolor： 字体颜色
 */
export function text_become_img(text: string, fontsize: number, fontcolor = '#595959') {
  const canvas = document.createElement('canvas');

  canvas.width = 800;
  // 一行的字数
  const row_num = Math.ceil(700 / fontsize);
  const height = Math.ceil(text.length / row_num * fontsize * 1.5);

  canvas.height = height < document.documentElement.clientHeight ? 800 : document.documentElement.clientHeight;
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

  if ( !context ) { return ''; }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = fontcolor;
  context.font = fontsize + 'px Arial';
  context.textBaseline = 'middle';
  fill_text_autoline(text, context, canvas, fontsize);

  const dataUrl = canvas.toDataURL('image/png');
  return dataUrl;
}

/** 绘制文字 (自动换行) */
function fill_text_autoline(text: string, context: any, canvas: any, fontsize: number) {
  if ( !context || !canvas ) { return; }
  const max_width = canvas.width - 60;
  const line_height =  (canvas && parseInt(window.getComputedStyle(canvas).lineHeight || '', fontsize + 4))
    || parseInt(window.getComputedStyle(document.body).lineHeight || '', fontsize + 4);
  const text_arr = text.split('');
  let line = '';
  const x = 30;
  let y = 30;

  for (let n = 0; n < text_arr.length; n++) {
    const testLine = line + text_arr[n];
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > max_width && n > 0) {
      context.fillText(line, x, y);
      line = text_arr[n];
      y += line_height;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

/** 等待指定时间 (毫秒) */
export function wait_time(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, time);
  });
}

/** 获取对象的value值成数组 相当于 Object.values() */
export function object_values( obj: any ): any[] {
  const values: any[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push( obj[key] );
    }
  }

  return values;
}


/**
 * 阿拉伯数字转换中文数字 (0 ~ 99)
 *
 * get_han_number(10) => 十
 * get_han_number(21) => 二十一
 * get_han_number(21, (str) => str + '、') => 二十一、
 *
 * @export
 * @param {number} num
 * @param {(str: string) => string} strHandler
 * @returns {(string | null)}
 */
export function get_han_number(num: number, strHandler: (str: string) => string): string | null {
  let han_num = '';

  const han_num_arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const neg_num_han = '负';

  if (num < 0) {
    han_num = neg_num_han;
    num = Math.abs(num);
  }

  if (num === 0) {
    han_num += '零';
  } else if (num > 0 && num <= 10) {
    han_num += han_num_arr[num];
  } else if (num > 10 && num <= 99) {
    const num_arr = String(num).split('');

    if (num <= 19) {
      num_arr.splice(0, 1, '10');
    } else {
      num_arr.splice(1, 0, '10');
    }

    num_arr.forEach((n, index) => {
      const _n = parseInt(n, 10);

      if ( (index === (num_arr.length - 1)) && (_n === 0)) { return null; }
      han_num += han_num_arr[_n];
    });
  } else {
    console.warn('只支持 -99 ~ 99 范围内的数字!');
    return null;
  }

  return strHandler ? strHandler(han_num) : han_num;
}
/** yymmddhhmmss(new Date) 2018-07-23 14:55:55 */
export function yymmddhhmmss(date_obj: Date, delimiter = '-') {
  const yy = date_obj.getFullYear().toString();
  const mm = (date_obj.getMonth() + 1).toString();
  const dd = date_obj.getDate().toString();
  const hh = date_obj.getHours().toString();
  const MM = date_obj.getMinutes().toString();
  const ss = date_obj.getSeconds().toString();

  return yy + delimiter + (mm[1] ? mm : `0${mm[0]}`)
  + delimiter + (dd[1] ? dd : `0${dd[0]}`) + ' '
  + (hh[1] ? hh : `0${hh[0]}`) + ':' + (MM[1] ? MM : `0${MM[0]}`) + ':' + (ss[1] ? ss : `0${ss[0]}`);
}
/**
 * unique_array function - 数组去重
 *
 * @param  {Array}  原始数组
 * @return {Array}  去重后的数组
 */
export function unique_array(arr: any[]) {
  if (arr.length <= 1) { return arr; }

  return arr.filter((item, index, self) => self.indexOf(item) === index);
}
