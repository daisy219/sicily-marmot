import { http_get, http_post } from './index';
import { BASE_API_ROOT } from '@/config/index';

// const baseAddress = process.env.NODE_ENV === 'production' ? 'http://47.96.2.170:3000' : 'http://127.0.0.1:3000';
const baseAddress =  'http://47.96.2.170:3000';
export default class SkmService {
  public static async get_list(params: any) {
    // let self = this;
    // const result = await http_get({ api: './static/skm/list.json'});
    const result = await http_get({ api: baseAddress + '/list', params: { params }});
    return result.data;
  }
  // 登陆接口
  public static async signin(userData: object) {
    const result = await http_post({ api: baseAddress + '/users/login', data: userData});
    return result.data;
  }
  public static async search() {
    const result = await http_get({ api: baseAddress + '/search'});
    return result.data;
  }
  public static async searchById(params: any) {
    const result = await http_get({ api: baseAddress + '/searchById', params: {params}});
    return result.data;
  }
  public static async islogin() {
    const result = await http_get({ api: baseAddress + '/islogin'});
    return result.data;
  }
  public static async register( registerData: object) {
    const result = await http_post({ api: baseAddress + '/users/register', data: registerData});
    return result.data;
  }
  public static async logout() {
    const result = await http_get({ api: baseAddress + '/users/logout'});
    return result.data;
  }
  public static async saveHtml(paper: any) {
    const result = await http_post({ api: baseAddress + '/saveHtml', data: paper});
    return result.data;
  }

}
