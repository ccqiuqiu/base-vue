/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  login: data => {
    return conn.post('/v1/public/login', {user: data})
      .then(data => ({data})).catch(err => ({err}))
  },
  todos: data => {
    return conn.post('/v1/public/test', {params: data})
      .then(data => ({data})).catch(err => ({err}))
  }
}
