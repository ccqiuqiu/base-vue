这是一个适用于移动端的vue基础项目，项目封装了目前开发一个移动端项目需要的主流技术和功能。使用高度模块化的目录结构和代码组织，可极大的提升开发效率。

![](https://img.shields.io/badge/vue-2.4.2-3ca776.svg)
![](https://img.shields.io/badge/vuex-2.3.1-35495e.svg)
![](https://img.shields.io/badge/vueRouter-2.7.0-9c76cb.svg)

[预览](http://ccqiuqiu.win/demo/base-vue)

# 主要技术栈
- vue
- vuex
- axios
- muse-ui

# 需要环境
node.js > 6.10

# 命令
```
npm run dev    #开发
npm run build  #发布
```

#目录结构和说明

```
├─ build                              # webpack打包配置项目录
├─ config                             # 项目配置文件目录
├─ dist                               # build发布目录
├─ src                                # 程序源文件目录
│   ├─ App.jsx                       # 应用主视图
│   ├─ main.js                       # 程序入口
│   ├─ assets                        # 公共资源目录（公用的js、css、图片等）
│   │   ├── css                      # 公共样式目录
│   │   ├── svg                      # 图片目录
│   │   ├── js                       # 工具类js、全局js方法
│   ├─ global                        # 网络请求统一出口、全局路由、全局store、mixin等
│   ├─ baseComponents                # 业务无关的公共组件
│   └─ module                        # 业务模块目录
│       ├── common                  # 公共模块
│       └── demo                    # 模块目录
│           ├── api.js              # 网络请求的api方法
│           ├── routers.js          # 模块的路由配置
│           ├── vuex.js             # vuex的模块
│           └── components          # 组件目录
└─ static                           # 静态资源目录，此目录的文件会在打包时复制到发布的目录
└─ test                             # 测试
```

# 功能说明

## 分模块异步加载
将异步路由和vuex异步模块结合，真正意义上实现了模块分离。只有在访问到模块下的组件时，才会加载该组件和相关的组件、store、mutations、actions等，减小首屏加载的js文件大小。

## css预处理器支持
支持postcss、less、sass、stylus默认使用postcss+less

## 高清适配
- 加入使用移动端高清适配方案，默认以750px（2倍屏）设计稿为基础。如设计稿是150px，那么直接写1.5rem
- 通过postcss-pxtorem插件实现像素转rem，以兼容以px为单位的ui库(muse-ui是一倍屏适配的)

## 国际化
使用vue-i18n实现国际话，并将国际化方法单独导出，方便在组件外的js里面使用

## 其他功能
- 加入autoprefixer插件，不用手动加浏览器前缀
- 统一增加网络请求和相应的拦截器，可以再拦截器里面实现统一的逻辑，如异常处理、功能参数处理、权限、loading等
- 默认使用flex.css布局
- 全部es6语法，代码更整洁
- 通过mixins封装页头标题，操作按钮和页面底部菜单的变化
- 将公用的参数、方法绑定到Vue实例，所有组件都能方便的使用
- react-router4使用官方的无限嵌套路由，在demo里面略显臃肿，但是项目功能增多，模块增多能非常方便扩展
- 有些看起来意义好像不大的代码都是为后期扩展做准备

## todo
- 加入一个网络请求的实例

# 其他项目
- [base-react](https://github.com/ccqiuqiu/base-react) 一个react项目框架 
- [base-vue](https://github.com/ccqiuqiu/base-vue) 一个vue项目框架 
- [base-api](https://github.com/ccqiuqiu/base-api) 一个基于koa2的后台api项目
- [F.List](https://github.com/ccqiuqiu/F.List) 一个包含待办、备忘、密码本功能的android项目
- [F.Money](https://github.com/ccqiuqiu/F.Money) 一个包含流水、借贷、图表统计的多账户、多用户记账的android项目
- [F.Time](https://github.com/ccqiuqiu/F.Time) 一个包含闹钟、提醒、进度条的android项目

# 计划
- 一个基于react + mbox的项目框架
- 一个基于koa + mongodb的后台API项目
- 一个基于react + rxjs + redux-observable 的项目框架
- 一个angular项目框架
