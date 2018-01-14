/**
 * Created by 熊超超 on 2017/8/4.
 */
const Index = () => ({component: import(/* webpackChunkName: "common" */ './components/Index')})
const CitySelect = () => ({component: import(/* webpackChunkName: "common" */ './components/CitySelect')})

export default [{
  path: '/common',
  component: Index,
  children: [
    {
      path: 'citySelect',
      component: CitySelect
    }
  ]
}]
