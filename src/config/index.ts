const W: any = window;
const MAIN_CONFIG: { [key: string]: any } = W.MAIN_CONFIG;
if ( ! MAIN_CONFIG) { console.error('主配置文件 MAIN_CONFIG.js 不存在，请检查!'); }

// ---------------------------- 开发环境判断 ----------------------------
export const ENV = { is_dev: process.env.NODE_ENV === 'development' };
export function IS_DEV() { return MAIN_CONFIG.__DEV__; }
W.IS_DEV = IS_DEV;


// 平台接口地址
export const BASE_API_ROOT = MAIN_CONFIG.BASE_API_ROOT;
