/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from './conn'

const request = (method, url, data = {}) => {
  return conn.request({method, url, data}).then(data => ({data})).catch(err => ({err}))
}

export default {
  login: params => request('get', '/login', params),
  getFly: params => request('post', '/fly/list', params),
  getMessage: params => request('get', '/message/list', params)
}
