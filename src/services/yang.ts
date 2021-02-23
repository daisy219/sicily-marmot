import { http_get } from './index';

export default class YangService {
  public static async get_list() {
    const result = await http_get({api: './static/yang/list.json'});
    return result.data;
  }
}
