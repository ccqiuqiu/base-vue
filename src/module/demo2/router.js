/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "demo2" */ '@/module/demo2/components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "demo2" */ '@/module/demo2/components/HomePage')})

export default [{
  path: '/demo2',
  component: Index,
  children: [
    {
      path: '',
      name: 'demo2Home',
      component: HomePage
    }
  ]
}]
