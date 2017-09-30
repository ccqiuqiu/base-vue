/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  searchFlight: data => {
    return conn.get('', {params: data})
    // .then(res => ({res})).catch(err => ({err}))
  }
}
