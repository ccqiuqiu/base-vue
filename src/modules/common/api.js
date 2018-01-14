/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  test: () => {
    return conn.get('/fly/list')
      .then(data => ({data})).catch(err => ({err}))
  }
}
