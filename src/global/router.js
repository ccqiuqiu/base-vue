/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Router from 'vue-router'

import common from '../module/common/router'
import book from '../module/book/router'
import fly from '../module/fly/router'
import message from '../module/message/router'
import my from '../module/my/router'

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

export default router
