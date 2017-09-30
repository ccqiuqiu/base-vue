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
export default router
