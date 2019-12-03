
/**
 * 获取到前端路由中的各个 component_path
 * /path1/path2?id=1&msg=2 => ['path1', 'path2']
 *
 * @export
 * @param {string} route_path vue-router: this.$route.path
 * @returns {string[]}
 */
export function get_route_components(route_path: string): string[] {
  let _route_path = route_path;

  if (_route_path.indexOf('#') !== -1) {
    _route_path = route_path.split('#')[1];
  }
  const components_str = _route_path.split('?')[0];
  const components = components_str.split('/');

  return components.slice(1);
}

/**
 * 空函数
 *
 * @export
 */
export function noop(): void {}

/**
 * 返回数组最后一位
 * arr_last([1, 2, 3]) => 3
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
export function arr_last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

/**
 * 创建区间数组
 *
 *
 * @export
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
export function range_arr(start: number, end: number): number[] {
  const len = end - start + 1;
  let step = start - 1;

  if (len <= 0) {
    return [];
  }

  return (Array as any).apply(null, { length: Math.abs(len) })
    .map(() => ++step);
}

/**
 * 是否定义
 *
 * @export
 * @param {*} something
 * @returns {boolean}
 */
export function is_undefined(something: any): boolean {
  return something === void 0;
}

export function is_exist(something: any): boolean {
  return !is_undefined(something) && (something !== null);
}

// 类型判断
const _isType = (type: string) => (target: any): boolean =>
  Object.prototype.toString.call(target) === '[object ' + type + ']';

export const is_array = _isType('Array');
export const is_number = _isType('Number');
export const is_string = _isType('String');
export const is_object = _isType('Object');

/**
 * 安全的获取值
 *
 * safe_get(obj, 'a.b.c') // 123
 * safe_get(obj, 'a.b.d', '我是默认值') // 我是默认值
 *
 * @export
 * @param {*} targetObj
 * @param {string} keyString
 * @param {*} defaultValue
 * @returns {*}
 */
export function safe_get(targetObj: any, keyString: string, defaultValue: any): any {
  const path = String(keyString).split('.');
  const result = path.reduce((preObj, curPath) => {
    return (preObj !== null && !is_undefined(preObj))
      ? preObj[curPath]
      : preObj;
  }, targetObj);

  return is_undefined(result)
    ? (is_undefined(defaultValue) ? result : defaultValue)
    : result;
}

/**
 * 过滤掉对象中值为 false(不为数字) 的属性
 * 需注意，可能被过滤掉的属性应为可选属性 (否则可能会发送不安全的问题)
 * 过滤的数据不应是嵌套类型，否则可能会有引用的问题
 *
 * @export
 * @template T 返回的数据的类型
 * @param {*} obj
 * @param {boolean} is_filter_zero 是否过滤 0 值
 * @returns {T}
 */
export function filter_empty_value<T>(obj: any, is_filter_zero = false): T {
  const result: any = {};

  for (const key in obj) {
    if (obj[key] || ( !is_filter_zero && typeof obj[key] === 'number')) {
      result[key] = obj[key];
    }
  }

  return result;
}

/** 过滤掉值为空字符串和-1的参数 */
export function filter_params_empty<T>(obj: any): T {
  const params: any = JSON.parse( JSON.stringify(obj) );

  for ( const key in params ) {
    if ( params[key] === '' || params[key] === -1 ) {
      delete params[key];
    }
  }

  return params;
}


/**
 * 改变当前时间的格式
 * @param fmt 时间的格式(如："yyyy-MM-dd hh:mm:ss")
 * @returns fmt
 */
export function date_format( fmt: string ): string {
  const date = new Date();
  const o: any = {
      'M+': date.getMonth() + 1,   // 月份
      'd+': date.getDate(),        // 日
      'h+': date.getHours(),       // 小时
      'm+': date.getMinutes(),     // 分
      's+': date.getSeconds(),     // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }

  return fmt;
}

/**
 * 时间转变为毫秒数
 * @param fmt 时间的格式(如："yyyy-MM-dd hh:mm:ss")
 */
export function get_time( fmt: string ): number {
  const milliseconds: number = new Date( fmt.replace(new RegExp('-', 'gm'), '/') ).getTime();

  return milliseconds;
}

/** yyyymmdd(new Date) -> "2018-07-23" */
export function yyyymmdd(date_obj: Date, delimiter = '-') {
  const yyyy = date_obj.getFullYear().toString();
  const mm = (date_obj.getMonth() + 1).toString();
  const dd = date_obj.getDate().toString();

  return yyyy + delimiter + (mm[1] ? mm : `0${mm[0]}`)
    + delimiter + (dd[1] ? dd : `0${dd[0]}`);
}

/** yymmddhhmm(new Date) 2018-07-23 14:55 */
export function yymmddhhmm(date_obj: Date, delimiter = '-') {
  const yy = date_obj.getFullYear().toString();
  const mm = (date_obj.getMonth() + 1).toString();
  const dd = date_obj.getDate().toString();
  const hh = date_obj.getHours().toString();
  const MM = date_obj.getMinutes().toString();

  return yy + delimiter + (mm[1] ? mm : `0${mm[0]}`)
  + delimiter + (dd[1] ? dd : `0${dd[0]}`) + ' '
  + (hh[1] ? hh : `0${hh[0]}`) + ':' + (MM[1] ? MM : `0${MM[0]}`);
}

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
 * 对象数组根据对象的某个 key 进行去重
 *
 * const arr = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 3}]
 * unique_object_array(arr, 'a') // [{a: 1, b: 2}, {a: 2, b: 3}]
 *
 * @param {any[]} arr
 * @param {string} key
 * @returns
 */
export function unique_object_array(arr: any[], key: string) {
  return arr.reduce((pre: any[], obj: any) => {
    const temp = pre.find((item: any) => item[key] === obj[key]);

    if ( ! temp) { pre.push(obj); }
    return pre;
  }, []);
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

/**
 * 过滤 html tag
 *
 * @param {any} html_str
 * @returns {stirng}
 */
export function filter_html_tag(html_str?: string): string {
  if ( ! html_str) { return ''; }
  return html_str.replace(/<\/?[^>]*>/g, '') // 去除HTML Tag
    .replace(/[|]*\n/, '')                   // 去除行尾空格
    .replace(/&npsp;/ig, '')                 // 去掉npsp
    .replace(/&ensp;/ig, '');                // 去掉npsp
}

/**
 * 截取字符串
 *
 * @export
 * @param {string} [str]
 * @returns {string}
 */
export function cut_out_string(str?: string, length?: number): string {
  if ( ! str) { return ''; }
  if ( ! length) { return ''; }
  if (length >= str.length) { return str; }

  return str.slice(0, length);
}

/**
 * 判断是否为为非 0 的 false 值
 * 0 -> false
 * '' -> true
 * false -> true
 *
 * @export
 * @param {*} value
 * @returns
 */
export function is_non_zero_false_value(value: any) {
  if (value) { return false; }
  if (value === 0) { return false; }
  return true;
}
/**
 * 对象转字符串(不支持嵌套对象)
 * @param 对象
 */
export function object_to_string(obj: any) {
  return (Object.keys(obj || {}).sort() || []).reduce((str, key, index, that) => {
    let _objKey = '';
    if (typeof obj === 'object') {
      _objKey = obj[key];
    }
    return str + String(key) + ':' + String(_objKey) + (index === that.length - 1 ? '' : '&');
  }, '');
}

/** 过滤非法空格字符 */
export function filter_unvalid_space(str: string) {
  if ( ! str || ! str.length) { return ''; }
  const result: string[] = [];

  for (const char of str) {
    if (char.charCodeAt(0) === 8194) {
      result.push(String.fromCharCode(32));
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

/** 获取 url origin */
export function get_url_origin(): string {
  return window.location.origin || (window.location.protocol + '//' + window.location.host);
}

/** 判断数据是否为 json */
export function is_json(d: any) {
  if (typeof d === 'object') { return true; }
  if (typeof d === 'string') {
    try {
      JSON.parse(d);
      return true;
    } catch (err) { return false; }
  }
  return false;
}

/** 过滤出指定条件的键值对 */
export function filter_obj(obj: COMMON_TYPE.StringDictionaryType, fn: (k: string, v: any) => boolean): COMMON_TYPE.StringDictionaryType {
  const result: COMMON_TYPE.StringDictionaryType = {};

  if (!obj) { return result; }

  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const status = fn(k, obj[k]);
      if (status) { result[k] = obj[k]; }
    }
  }

  return result;
}

/** 判断浏览器是否安装 flash，兼容火狐和ie */
export function has_flash() {
  let hasFlash = 0;  // 0表示未安装， 1表示安装
  let flashVersion = 0;

  try {
    if (document.all) {
      const swf: any = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

      if (swf) {
        hasFlash = 1;
        const VSwf = swf.GetVariable('$version');

        flashVersion = parseInt(VSwf.split(' ')[1].split(',')[0], 10);
      }
    } else {
      if ((navigator as any).plugins && (navigator as any).plugins.length > 0) {
      const swf = (navigator as any).plugins['Shockwave Flash'];
      if (swf) {
        hasFlash = 1;
        const words = swf.description.split(' ');
        for (let i = 0; i < words.length; ++i) {
          if ( isNaN(parseInt(words[i], 10)) ) { continue; }
          flashVersion = parseInt(words[i], 10);
        }
      }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return { f: hasFlash, v: flashVersion };
}

/** 判断用户设备是否为移动端 */
export function is_mobile(): boolean {

  const sUserAgent = (navigator.userAgent || '').toLowerCase();
  const match = (reg: RegExp, ms: string) => (sUserAgent.match(reg) || '')[0] === ms;

  const bIsIpad = match(/ipad/i, 'ipad');
  const bIsIphoneOs = match(/iphone os/i, 'iphone os');
  const bIsMidp = match(/midp/i, 'midp');
  const bIsUc7 = match(/rv:1.2.3.4/i, 'rv:1.2.3.4');
  const bIsUc = match(/ucweb/i, 'ucweb');
  const bIsAndroid = match(/android/i, 'android');
  const bIsCE = match(/windows ce/i, 'windows ce');
  const bIsWM = match(/windows mobile/i, 'windows mobile');

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return true;
  } else {
    return false;
  }
}

/** 数组元素交换位置 */
export function swap_array_item(arr: any[], index1: number, index2: number): any[] {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

/** 判断 object 对象中是否有值 */
export function has_value_object(data: {[k: string]: any}): boolean {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}

/** 文件标准单位转换 */
export function bytesToSize(bytes: number) {
  if ( bytes === 0 ) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

// 浮点数四舍五入
export function floatToFixed(num: number, p = 100): number {
  return Math.round(num * p) / p;
}

/** 获取字符串实际宽度
 * let str = '123第三方2312312312';
 * let st2 = computeFontSize_canvas(str, '14px', '微软雅黑');
 * console.log(st2);
 * @export
 * @param {string} str 需要计算的字符串
 * @param {string} size font-size '14px'
 * @param {string} family font-family '微软雅黑'
 * @returns {number}
 */
export function computeFontSize_canvas(str: string, size: string, family: string): number {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  if ( !ctx ) {
    return 0;
  }
  ctx.font = size + ' ' + family;
  const txt = str;
  const measureWidth = ctx.measureText(txt).width ;
  return measureWidth;
}

/**
 * - element-ui日期选择器，配合开始日期使用
 * ### 结束日期禁选
 * - 参数： 传入开始时间（如：2018-08-08 08:08:08）
 * - return: 返回结束时间picker
 */
export function end_data_picker( data: string ) {
  return { disabledDate: (time: any) => time.getTime() < ( data ?  get_time( data ) - 8.64e7 : Date.now() - 8.64e7 ) };
}

/**
 * - element-ui日期选择器，配合结束日期使用
 * ### 开始日期禁选
 * - 参数： 传入结束时间（如：2018-08-08 08:08:08）
 * - return: 返回开始时间picker
 */
export function start_data_picker( data: string ) {
  return { disabledDate: (time: any) => data ? time.getTime() > get_time( data ) || time.getTime() < Date.now() - 8.64e7
                                              : time.getTime() < Date.now() - 8.64e7 };
}
