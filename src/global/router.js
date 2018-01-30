/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Router from 'vue-router'

import common from '../modules/common/router'
import book from '../modules/book/router'
import fly from '../modules/fly/router'
import message from '../modules/message/router'
import my from '../modules/my/router'
import store, {modulesMap} from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    ...common,
    ...book,
    ...fly,
    ...message,
    ...my,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// 路由改变的钩子
router.beforeEach((to, from, next) => {
  const moduleName = to.path.split('/')[1]
  // 在首次加载模块的时候显示loading
  const list = ['common'] // 忽略的模块，因为这些模块不是异步加载的
  if (!modulesMap[moduleName] && !list.includes(moduleName)) {
    store.commit('showLoading')
  }
  // 切换到和当前模块不同的模块首页的时候，如果不是后退，那么把sHome设置为true，路由的动画就是切换到首页的动画
  if (to.meta.isHome && !router.options.isBack && moduleName !== from.path.split('/')[1]) {
    store.commit('changeIsHome', true)
  }
  to.meta.isBack = router.options.isBack
  router.options.isBack = false
  next()
})

export default router
