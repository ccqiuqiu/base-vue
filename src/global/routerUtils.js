/**
 * Created by 熊超超(https://github.com/ccqiuqiu) on 2018/1/10.
 * 将router的方法包装一层，主要目的
 * 一是为了实现路由前进或后退额外处理一些逻辑
 * 二是方便后期和原生页面混合的时候，控制路由行为
 */
import router from './router'
import store from './store'

export default {
  back () {
    // 路由返回的时候，设置isBack为true，路由的动画就是后退动画
    router.options.isBack = true
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
