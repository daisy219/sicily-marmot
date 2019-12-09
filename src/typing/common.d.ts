// 公共类型
declare namespace COMMON_TYPE {
  /* ============================ services 类型 ============================ */
  /****
   * 接口返回的数据
   */
  export interface AjaxResponseType {
    readonly code: number;   // 状态码
    readonly msg: string;    // 信息
    readonly token?: string; // token
    readonly data: any;      // 具体数据
  }

  /**
   * get 请求参数
   */
  export interface GetConfigType {
    api: string;
    params?: any;
  }

  /**
   * post 请求参数
   */
  export interface PostConfigType {
    api: string;
    data?: any;
    json?: boolean;
    format?: boolean;
  }

  /**
   * 响应请求返回的数据，携带数据
   */
  export interface ResponseStatusAndDataType<T> {
    status: boolean;
    message: string;
    data: T;
  }

  /**
   * 请求响应返回的状态
   */
  export interface ResponseStatusType {
    status: boolean;
    message: string;
  }
  /**
   * 路由 meta
   *
   * @interface RouteMetaType
   */
  interface RouteMetaType {
    readonly title: string;         // 页面的 title
    readonly top_nav_name?: string; // 路由具体的 nav name，对应导航栏上的 nav name
    readonly auth?: string[];       // 权限数组
  }
  /**
   * 路由配置
   *
   * @export
   * @interface RouteConfigType
   */
  export interface RouteConfigType {
    readonly route_name: string;  // 路由 name，可 $router.push({ name })
    readonly han_name: string;    // 路由的汉字标题，可作为导航的 title
    readonly path: string;        // 路由 path
    readonly meta?: RouteMetaType; // 路由元信息
  }

  export interface RouterType {
    path: string;
    name: string;
    component: any;
  }
  export interface StringDictionaryType<T = any> {
    [key: string]: T;
  }
  /**
   * 面包屑
   */
  export interface BreadcrumbRouteConfig {
    han_name: string;
    route_name?: string;
    query?: any;
  }

  /** 视频暂停返回参数 */
  export interface VideoReturnType {
    running_time: number;
    start_time: string;
    end_time: string;
  }

  // 项目信息
  export interface ProjectInfoType {
    version: number; // 项目版本
    build_timestamp: number; // 编译时间戳
    build_time: string; // 编译的日期
  }
}
