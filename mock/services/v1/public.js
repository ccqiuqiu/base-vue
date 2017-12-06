const createBody = require('./createBody')
const koaBody = require('koa-body')()
const Mock = require('mockjs')

async function login(ctx) {
  const data = Mock.mock({
    user: {id: 123}
  })
  ctx.body = createBody(data, true, '成功')
}
async function test(ctx) {
  const data = Mock.mock({
    'list|1-10': [{
      'id|+1': 1,
      'title': function () {
        return '标题' + this.id
      },
      'status|1': [1, 2, 3]
    }]
  })
  ctx.body = createBody(data, true, '成功')
}

exports.register = function (router) {
  router.post('/public/login', koaBody, login)
  router.post('/public/test', koaBody, test)
}
