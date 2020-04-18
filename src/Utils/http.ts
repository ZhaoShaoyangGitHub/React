import axios from "axios";
import store from "store";
import Qs from "qs";
import { getUrlParam } from "./index";

const origin: string = window.location.origin;

const axios_baseUrl = origin;

const service = axios.create();
const $axios_set_default = () => {
  service.defaults.baseURL = axios_baseUrl;
  service.defaults.timeout = 8000; //超时8秒

  //请求拦截
  service.interceptors.request.use(
    (config: any) => {
      // eslint-disable-next-line no-console
      console.log("请求开始");

      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );
};

//响应拦截
service.interceptors.response.use(
  (response: any) => {
    // eslint-disable-next-line no-console
    console.log("请求结束");

    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// json格式的请求
const ajax_json = (param: ajax_param) => {
  const { token: urltoken } = getUrlParam();
  const token = store.get("token") || urltoken;
  const config: ajax_param = {
    headers: {
      "x-long-string": "web-h5",
    },
    ...param,
  };

  // set token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  //请求参数转换
  if (config.method === "get" || !config.method) {
    config.param = config.data;
    delete config.data;
  }
  return service(config);
};

// formDta格式的请求
const ajax_form = (param: ajax_param) => {
  const { token: urltoken } = getUrlParam();
  const token = store.get("token") || urltoken;

  const config: ajax_param = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-long-string": "web-h5",
    },
    transformRequest: [
      (data: ajax_param) => {
        const param = Qs.stringify(data);
        return param;
      },
    ],
    ...param,
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  //请求参数转换
  if (config.method === "get" || !config.method) {
    config.param = config.data;
    delete config.data;
  }
  return service(config);
};

export { $axios_set_default, ajax_json, ajax_form, axios };
