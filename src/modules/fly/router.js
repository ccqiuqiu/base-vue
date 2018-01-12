/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "fly" */ './components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "fly" */ './components/HomePage')})

export default [{
  path: '/fly',
  component: Index,
  children: [
    {
      path: '',
      meta: {isHome: true},
      name: 'flyHome',
      component: HomePage
    }
  ]
}]
