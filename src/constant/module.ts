
export interface ModuleInfoType {
  name: string; // 模块名
  route?: string; // 模块路由path
  icon: string; // 模块icon
  has_children?: boolean; // 是否有下拉选项
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
    name: '归档',
    route: 'classify',
    icon: 'iconfenlei',
  },
  {
    name: '关于我们',
    route: 'about',
    icon: 'iconaiqing',
  },
  {
    name: '换肤',
    icon: 'iconzhuti',
    has_children: true,
  },
];

// 换肤
export const SKIN_MODULES: any[] = [
  {
    icon: 'iconxue',
    title: 'snow_theme',
  },
  {
    icon: 'iconICON-',
    title: 'peach_theme',
  },
  {
    icon: 'iconICON-1',
    title: 'lemon_theme',
  },
  {
    icon: 'iconICON-4',
    title: 'cherry_theme',
  },
];
