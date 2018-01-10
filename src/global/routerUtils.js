/**
 * Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/10.
 * 将router的方法包装一层，主要目的
 * 一是为了实现路由前进或后退额外处理一些逻辑
 * 二是方便后期和原生页面混合的时候，控制路由行为
 */
import router from './router'
import store, {modulesMap} from './store'

let isBack = false // 是否返回。此处额外加一个变量，是因为单独用store里面的isBack会有问题，所以用2个同时控制
export default {
  back () {
    // 路由返回的时候，设置isBack为true，路由的动画就是后退动画
    isBack = true
    store.commit('changeIsBack', true)
    router.back()
  },
  push () {
    router.push(...arguments)
  },
  replace () {
    router.replace(...arguments)
  }
}

// 路由改变的钩子
router.beforeEach((to, from, next) => {
  const moduleName = to.path.split('/')[1]
  // 在首次加载模块的时候显示loading
  if (!modulesMap[moduleName] && moduleName !== '' && moduleName !== 'book') {
    store.commit('showLoading')
  }
  // 切换到和当前模块不同的模块首页的时候，如果不是后退，那么把sHome设置为true，路由的动画就是切换到首页的动画
  if (to.meta.isHome && !isBack && moduleName !== from.path.split('/')[1]) {
    store.commit('changeIsHome', true)
  }
  isBack = false
  next()
})
