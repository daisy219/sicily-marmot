
export interface ModuleInfoType {
  name: string; // 模块名
  route: string; // 模块路由path
}


// 导航
export const MODULES_INFO: ModuleInfoType [] = [
  {
    name: 'home',
    route: 'home',
  },
  {
    name: 'echarts',
    route: 'echarts',
  },
  {
    name: 'video',
    route: 'video',
  },
];
