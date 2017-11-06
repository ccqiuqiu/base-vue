/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  login: data => {
    return conn.post('/public/login', {user: data})
  },
  todos: data => {
    return conn.post('/todo/list', {params: data})
    // .then(res => ({res})).catch(err => ({err}))
  }
}
