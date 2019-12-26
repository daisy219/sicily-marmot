
export interface ModuleInfoType {
  name: string; // 模块名
  route: string; // 模块路由path
}


// 导航
export const MODULES_INFO: ModuleInfoType [] = [
  {
    name: '首页',
    route: 'home',
  },
  {
    name: '肥仔专属',
    route: 'ming',
  },
  {
    name: '屁阳专属',
    route: 'yang',
  },
  {
    name: '分类入库',
    route: 'classify',
  },
  {
    name: '编辑',
    route: 'editor',
  },

  {
    name: '关于我们',
    route: 'about',
  },
];
