/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "message" */ './components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "message" */ './components/HomePage')})
const MessageDetail = () => ({component: import(/* webpackChunkName: "message" */ './components/MessageDetail')})
const Test = () => ({component: import(/* webpackChunkName: "message" */ './components/Test')})

export default [{
  path: '/message',
  component: Index,
  children: [
    {
      path: '',
      meta: {isHome: true},
      name: 'messageHome',
      component: HomePage
    },
    {
      path: 'detail',
      component: MessageDetail
    },
    {
      path: 'test',
      component: Test
    }
  ]
}]
