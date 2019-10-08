import { http_get } from './index';
import { BASE_API_ROOT } from '@/config/index';


export default class EchartsService {
  public static async get_subject() {
    const result = await http_get({api: BASE_API_ROOT + '/homework/api/statistics/get-subject-analysis?token=455c4d94d83a2d820fd2dd69d0d1d000&roletype=4'});
    return result.data.data;
  }
}
