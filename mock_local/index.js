/**
 * Created by 熊超超 on 2017/12/4.
 */
// mock的写法参照 http://mockjs.com
import Mock from 'mockjs'

Mock.mock(/\/v1\/public\/login/, {
  success: true,
  data: {
    user: {id: 7}
  }
})

Mock.mock(/\/v1\/public\/test/, {
  success: true,
  data: {
    'list|1-10': [{
      'id|+1': 1,
      'title': function () {
        return '标题' + this.id
      },
      'status|1': [1, 2, 3]
    }]
  }
})

