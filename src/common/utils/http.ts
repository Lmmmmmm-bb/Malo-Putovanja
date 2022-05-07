import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IBaseResponse } from '../models/base-response';
import { StatusCode } from '../models/status-code';
import { StorageKeyEnum } from '../models';
import { getLocalItem } from './local-storage';

const baseURL = import.meta.env.DEV ? 'http://localhost:3030' : '';

const instance = axios.create({
  baseURL,
  timeout: 1e4
});

instance.interceptors.request.use((request) => {
  const storageToken = getLocalItem(StorageKeyEnum.Token);
  if (storageToken && request.headers) {
    request.headers['Authorization'] = `Bearer ${storageToken}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response: AxiosResponse<IBaseResponse>) => {
    const { data } = response;
    const { status, message } = data;
    if (status !== StatusCode.Success) {
      window.$MPMessage.error(message ?? '请求出错');
    }

    return data;
  },
  (error) => error
);

async function getRequest<T = any, D = unknown>(
  url: string,
  config?: AxiosRequestConfig<D>
) {
  return instance.get<T, IBaseResponse<T>, D>(url, config);
}

async function postRequest<T = any, D = unknown>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) {
  return instance.post<T, IBaseResponse<T>, D>(url, data, config);
}

async function patchRequest<T = any, D = unknown>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) {
  return instance.patch<T, IBaseResponse<T>, D>(url, data, config);
}

async function putRequest<T = any, D = unknown>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) {
  return instance.put<T, IBaseResponse<T>, D>(url, data, config);
}

async function deleteRequest<T = any, D = unknown>(
  url: string,
  config?: AxiosRequestConfig<D>
) {
  return instance.delete<T, IBaseResponse<T>, D>(url, config);
}

export const http = {
  getRequest,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest
};
