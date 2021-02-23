import { http_get, http_post } from './index';

export default class SkmService {

  // 登陆接口
  public static async signin(userData: object) {
    const result = await http_post({ api: '/users/login', data: userData});
    return result.data;
  }
  public static async search() {
    const result = await http_get({ api: '/search'});
    return result.data;
  }
  public static async searchById(params: any) {
    const result = await http_get({ api: '/searchById', params: {params}});
    return result.data;
  }
  public static async islogin() {
    const result = await http_get({ api: '/islogin'});
    return result.data;
  }
  public static async register( registerData: object) {
    const result = await http_post({ api: '/users/register', data: registerData});
    return result.data;
  }
  public static async logout() {
    const result = await http_get({ api: '/users/logout'});
    return result.data;
  }
  public static async saveHtml(paper: any) {
    const result = await http_post({ api: '/saveHtml', data: paper});
    return result.data;
  }

}
