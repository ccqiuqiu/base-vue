/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "my" */ './components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "my" */ './components/HomePage')})

export default [{
  path: '/my',
  component: Index,
  children: [
    {
      path: '',
      meta: {isHome: true},
      name: 'myHome',
      component: HomePage
    }
  ]
}]
