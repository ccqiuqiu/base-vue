/**
 * Created by 熊超超 on 2017/12/4.
 */
// mock的写法参照 http://mockjs.com
import Mock from 'mockjs'
Mock.mock('/login', option => {
  const user = JSON.parse(option.body).user
  if (user.userName === 'cc' && user.passWord === 'e10adc3949ba59abbe56e057f20f883e') {
    return {
      success: true,
      data: {
        user: {id: 7}
      }
    }
  } else {
    return {
      success: false,
      code: 402,
      message: '用户名密码不匹配'
    }
  }
})

Mock.mock('/todo/list', {
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

