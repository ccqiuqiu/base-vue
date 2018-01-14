/**
 * Created by 熊超超 on 2017/8/4.
 */
import axios from 'axios'
import store from './store'
import {alert} from '$js/utils'

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
  config.data = config.data || {}
  // 从请求参数里面取出一些控制参数, 控制loading的显示
  const {_loading} = config.data
  if (_loading !== false) {
    store.commit('showLoading', _loading)
  }
  config.data.common = {} // 可加公共参数
  return config
}, err => {
  // 请求错误时,暂时还没有发现什么时候会触发
  alert(err)
  return Promise.reject(err)
})
// 注册响应拦截器
axiosInstance.interceptors.response.use(response => {
  // 从请求参数里面取出一些控制参数, 控制loading的显示,err的处理
  const {_loading, _hideGlobalError} = JSON.parse(response.config.data)
  if (_loading !== false) {
    store.commit('hideLoading')
  }
  // 接口返回成功的时候，将返回数据resolve
  if (response.data.success) {
    return Promise.resolve(response.data.data)
  } else {
    // todo 此处应该记录err日志
    // 接口返回失败的时候
    const error = response.data.error || {message: '服务器异常'}
    // 默认情况下，此处统一提示服务端的错误信息，除非请求的时候设置了_hideGlobalError为true
    if (!_hideGlobalError) {
      alert(error.message)
    }
    // 将异常信息reject
    return Promise.reject(error)
  }
}, error => {
  // todo 此处应该记录err日志
  // 这里是服务端的异常，如404，500等
  const {_loading, _hideGlobalError} = JSON.parse(error.response.config.data)
  if (_loading !== false) {
    store.commit('hideLoading')
  }
  // 默认情况下，此处统一提示服务端的错误信息，除非请求的时候设置了_hideGlobalError为true
  if (!_hideGlobalError) {
    alert(error.message)
  }
  // 将异常信息reject
  return Promise.reject(error)
})

export default axiosInstance
