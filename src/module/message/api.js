/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  getMessage: () => {
    return conn.get('/message/list')
      .then(data => ({data})).catch(err => ({err}))
  }
}
