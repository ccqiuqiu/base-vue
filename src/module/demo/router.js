/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "demo" */ '@/module/demo/components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "demo" */ '@/module/demo/components/HomePage')})

export default [{
  path: '/',
  alias: '/demo',
  component: Index,
  children: [
    {
      path: '',
      name: 'demoHome',
      component: HomePage
    }
  ]
}
]
