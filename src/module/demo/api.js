/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  todos: data => {
    return conn.get('/todo', {params: data})
    // .then(res => ({res})).catch(err => ({err}))
  }
}
