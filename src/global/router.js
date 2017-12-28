/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Router from 'vue-router'

import common from '../module/common/router'
import demo from '../module/demo/router'
import demo2 from '../module/demo2/router'

Vue.use(Router)

const router = new Router({
  routes: [
    ...common,
    ...demo,
    ...demo2,
    {
      path: '*',
      redirect: '/'
    }
  ]
})
// 通过路由的变化，判断是前进还是后退，将后退标识存入路由元数据
const routerList = []
router.beforeEach((to, from, next) => {
  if (routerList.length && routerList.lastIndexOf(to.path) === routerList.length - 1) {
    // 后退
    routerList.splice(routerList.length - 1, 1)
    to.meta.isBack = true
    from.meta.isBack = true
  } else {
    // 前进
    routerList.push(from.path || '/')
    to.meta.isBack = false
    from.meta.isBack = false
  }
  next()
})
export default router
