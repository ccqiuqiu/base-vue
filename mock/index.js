/**
 * Created by 熊超超 on 2017/12/4.
 */
// mock的写法参照 http://mockjs.com
import Mock from 'mockjs'

const host = 'http://97.64.31.179:3000'

Mock.mock(host + '/v1/public/login', {
  success: true,
  data: 111
})

Mock.mock(host + '/v1/todo/list', {
  success: true,
  'data|1-10': [{
    'id|+1': 1,
    'title': function () {
      return '标题' + this.id
    },
    'status|1': [1, 2, 3]
  }]
})

