import axios from 'axios';
import qs from 'qs';

console.log(process.env.VUE_APP_BASE_API);
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000, // 请求超时时间
  withCredentials: true,
});


export function http_post(config: COMMON_TYPE.PostConfigType): Promise<any> {
  const _data: any = config.data;
  if (config.format) {
    return new Promise((resolve, rerject) => {
      service.post(config.api,
        (qs as any).stringify(_data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })).then((res) => {
          resolve(res);
        });
    });
  } else {
    return new Promise((resolve, rerject) => {
      service.post(config.api, _data).then((res) => {
        resolve(res);
      });
    });
  }
}


export function http_get(config: COMMON_TYPE.GetConfigType): Promise<any> {
  let _data: any = null;
  if (config.params) {
    _data = config.params;
  }
  return new Promise((resolve, reject) => {
    service.get(config.api, _data)
    .catch((err) => {
      if (err) {
        return err;
      }
    })
    .then((res) => {
      resolve(res);
    });
  });
}
