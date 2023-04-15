import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建实例
const instance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000
})

// 拦截请求
instance.interceptors.request.use(
  (config: AxiosRequestConfig):any => {
    // 在发送请求之前做些什么
    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response
  },
  (error: any) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
// 封装get请求
export const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
  return instance.get(url, { params, ...config })
}

// 封装post请求
export const post = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return instance.post(url, data, config)
}
