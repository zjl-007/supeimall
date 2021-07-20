import { createStore } from 'vuex'

export default createStore({
  state: {
    isImgLoadCom: false,
  },
  mutations: {
    changeImgLoad(state, params) {
      state.isImgLoadCom = params.isValue;
    }
  },
  actions: {
  },
  modules: {
  }
})
