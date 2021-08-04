import {
  createStore
} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default createStore({
  state: {
    isImgLoadCom: false,
    cartList: [],
  },
  mutations,
  actions, 
  modules: {},
  getters,
})