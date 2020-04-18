import Qs from "qs";
import store from "store";

// 本地存储localStore
export const localStore = store;

/**
 * @description: 获取当前页面的参数或者指定字符串的参数
 * @param null
 * @return: {*}
 */
export const getUrlParam = (url = "") => {
  const search: string = url || window.location.search;
  return Qs.parse(search, {ignoreQueryPrefix: true});
};

// 随机整数（范围）
export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
