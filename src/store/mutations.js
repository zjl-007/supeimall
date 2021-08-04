export default {
  changeImgLoad(state, params) {
    state.isImgLoadCom = params.isValue;
  },
  addCounter(state, payload) {
    payload.count++;
  },
  addNewProduct(state, payload) {
    payload.count = 1;
    state.cartList.push(payload)
  }
}