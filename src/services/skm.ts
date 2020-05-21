import { http_get, http_post } from './index';
import { BASE_API_ROOT } from '@/config/index';

// const baseAddress = process.env.NODE_ENV === 'production' ? 'http://47.96.2.170:3000' : 'http://127.0.0.1:3000';
// const baseAddress =  'http://47.96.2.170:3000';
export default class SkmService {

  // 登陆接口
  public static async signin(userData: object) {
    const result = await http_post({ api: BASE_API_ROOT + '/users/login', data: userData});
    return result.data;
  }
  public static async search() {
    const result = await http_get({ api: BASE_API_ROOT + '/search'});
    return result.data;
  }
  public static async searchById(params: any) {
    const result = await http_get({ api: BASE_API_ROOT + '/searchById', params: {params}});
    return result.data;
  }
  public static async islogin() {
    const result = await http_get({ api: BASE_API_ROOT + '/islogin'});
    return result.data;
  }
  public static async register( registerData: object) {
    const result = await http_post({ api: BASE_API_ROOT + '/users/register', data: registerData});
    return result.data;
  }
  public static async logout() {
    const result = await http_get({ api: BASE_API_ROOT + '/users/logout'});
    return result.data;
  }
  public static async saveHtml(paper: any) {
    const result = await http_post({ api: BASE_API_ROOT + '/saveHtml', data: paper});
    return result.data;
  }

}
