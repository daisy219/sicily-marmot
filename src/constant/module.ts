
export interface ModuleInfoType {
  name: string; // 模块名
  route: string; // 模块路由path
  icon: string; // 模块icon
}


// 导航
export const MODULES_INFO: ModuleInfoType [] = [
  {
    name: '首页',
    route: 'home',
    icon: 'iconshouye',
  },
  {
    name: '肥仔专属',
    route: 'ming',
    icon: 'iconshoubing',
  },
  {
    name: '屁阳专属',
    route: 'yang',
    icon: 'iconduanqun',
  },
  {
    name: '分类入库',
    route: 'classify',
    icon: 'iconfenlei',
  },
  {
    name: '关于我们',
    route: 'about',
    icon: 'iconqingshu',
  },
];
