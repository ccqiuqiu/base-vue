/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "book" */ './components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "book" */ './components/HomePage')})
const CitySelect = () => ({component: import(/* webpackChunkName: "book" */ './components/CitySelect')})

export default [{
  path: '/',
  alias: '/book',
  component: Index,
  children: [
    {
      path: '',
      meta: {isHome: true},
      component: HomePage
    },
    {
      path: 'citySelect',
      component: CitySelect
    }
  ]
}
]
