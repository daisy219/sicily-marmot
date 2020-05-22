import { http_get, http_post } from './index';
import { BASE_API_ROOT } from '@/config/index';
import { ListItemParamsType, FolderOrTagContentParams } from '@/typing/page';

export default class SkmService {
  /** 获取置顶文章 */
  public static async get_top_list() {
    const result = await http_get({ api: BASE_API_ROOT + '/topList' });
    return result.data;
  }

  /** 获取列表 */
  public static async get_list(params: ListItemParamsType) {
    const result = await http_get({ api: BASE_API_ROOT + '/list', params: { params } });
    return result.data;
  }

  /** 获取文件夹列表 */
  public static async get_folder_and_tag_list() {
    const result = await http_get({ api: BASE_API_ROOT + '/folderAndTagList' });
    return result.data;
  }

  /** 获取文件夹或标签下内容 */
  public static async get_folder_or_tag_content(params: FolderOrTagContentParams) {
    const result = await http_get({ api: BASE_API_ROOT + '/folderOrTagList', params: { params } });
    return result.data;
  }
}
