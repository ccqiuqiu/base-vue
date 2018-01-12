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
