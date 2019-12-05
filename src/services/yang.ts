import { http_get } from './index';
import { BASE_API_ROOT } from '@/config/index';


export default class YangService {
  public static async get_list() {
    const result = await http_get({api: './static/yang/list.json'});
    return result.data;
  }
}
