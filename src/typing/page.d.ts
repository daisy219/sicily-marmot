// 请求列表数据
export interface ListItemParamsType {
  author?: string; // 作者
  page?: number;
  pageSize?: number;
}
// 文章列表类型
export interface ListItemType {
  _id: string;
  title: string; // 题目
  info: string; // 描述
  updated_at: Date; // 日期
  route_name?: string; // 路由名 
  author?: string; // 作者
  hasFolder?: string; // 所属文件夹
  hasTags?: string[]; // 拥有的标签
  saveImageUrl?: string; // 封面图片地址
}

export interface FolderOrTagContentParams {
  hasFolder?: string;
  hasTags?: string;
}
// 文件夹列表类型
export interface FolderItemType {
  _id: string;
  folderHasPaper: ListItemType[], // 内部所含文章
  updated_at: Date; // 更新时间
  folderName: string; // 文件夹名称
  cover: string; // 封面
  info: string; // 简介
}

export interface TagItemType {
  _id: string;
  updated_at: Date;
  name: string;
}
export interface CodeItemType {
  code: string; // 代码
  note: string; // 注释
}

export interface UnicodeItemType {
  final: string;
  html: string;
  css_js: string;
}