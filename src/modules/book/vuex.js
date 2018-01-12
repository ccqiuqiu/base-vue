/**
 * Created by 熊超超 on 2017/8/4.
 */
// import api from './api'

export default {
  state: {
    orgAirPort: {
      citynameCN: '北京',
      itatCode: 'PEK',
      countrynameCN: '中国',
      countrynameEN: 'CN',
      icaoCode: 'ZBAA',
      airportnameCN: '北京首都机场',
      airportnameEN: 'BEIJING'
    },
    dstAirPort: {
      citynameCN: '广州',
      itatCode: 'CAN',
      countrynameCN: '中国',
      countrynameEN: 'CN',
      icaoCode: 'ZGGG',
      airportnameCN: '广州白云机场',
      airportnameEN: 'GUANGZHOU'
    }
  },
  mutations: {
    updateAirPort (state, {airPort, flg}) {
      if (flg === 'org') {
        state.orgAirPort = airPort
      } else if (flg === 'dst') {
        state.dstAirPort = airPort
      }
    },
    changeAirPort (state) {
      [state.orgAirPort, state.dstAirPort] = [state.dstAirPort, state.orgAirPort]
    }
  },
  actions: {},
  getters: {}
}
