import axios from 'axios';
import qs from 'qs';

axios.defaults.withCredentials = true; // 让ajax携带cookie

export function http_post(config: COMMON_TYPE.PostConfigType): Promise<any> {
  const _data: any = config.data;
  if (config.format) {
    return new Promise((resolve, rerject) => {
      axios.post(config.api,
        (qs as any).stringify(_data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })).then((res) => {
          resolve(res);
        });
    });
  } else {
    return new Promise((resolve, rerject) => {
      axios.post(config.api, _data).then((res) => {
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
    axios.get(config.api, _data)
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
