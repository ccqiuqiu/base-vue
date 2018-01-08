/**
 * Created by 熊超超 on 2017/8/4.
 */
import axios from 'axios'
import store from './store'
// import {locale} from '$js/utils'

// 创建一个axios实例
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: 45000// 请求超时时间
})
// 注册请求拦截器
axiosInstance.interceptors.request.use(config => {
  store.commit('showLoading')
  config.data = config.data || {}
  config.data.common = {} // 可加公共参数
  return config
}, err => {
  return Promise.reject(err)
})
// 注册响应拦截器
axiosInstance.interceptors.response.use(response => {
  store.commit('hideLoading')
  if (response.data.success) {
    return Promise.resolve(response.data.data)
  } else {
    return Promise.reject(response.data.message || '请求失败')
  }
}, err => {
  store.commit('hideLoading')
  return Promise.reject(err.message)
})

export default axiosInstance
