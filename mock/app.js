const Koa = require('koa')
const app = new Koa()
const responseTime = require('koa-response-time')
const compress = require('koa-compress')
const cors = require('kcors')
const serve = require('koa-static')
const mount = require('koa-mount')
const services = require('./services')
const logger = require('koa-logger')
// 使用一些中间件
app.use(responseTime()) // 响应时间中间件 会设置X-Response-Time
app.use(compress()) // 数据压缩中间件
app.use(logger()) // 日志
app.use(cors({credentials: true})) // 跨域中间件
app.use(serve('static', {maxage: 2 * 60 * 1000}))// 静态文件目录

// 路由
app.use(mount('/v1', services.v1))

// 全局异常
app.on('error', function (err, ctx) {
  console.log('服务器异常', err)
})

app.listen(3000)
console.log('mock服务启动成功，请重新打开一个终端运行 npm run dev-mock')
