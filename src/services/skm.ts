import { http_get } from './index';
import { BASE_API_ROOT } from '@/config/index';


export default class SkmService {
  public static async get_list() {
    const result = await http_get({api: './static/skm/list.json'});
    // const result = await http_get({api: 'http://127.0.0.1:3000/search'});
    return result.data;
  }
}
