import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      "health",
      "transport",
      "food",
      "study",
    ],
    paymentsList: [
      { id: 1, category: "food", data: "08.11.2022", count: 235 },
      { id: 2, category: "food", data: "10.11.2022", count: 340 },
      { id: 3, category: "food", data: "12.11.2022", count: 410 },
    ],
  },
  getters: {
    getCategoriesList: (state) => state.categories,
    getPaymentsList: (state) => state.paymentsList,
  },
  mutations: {
    addPayment: (state, payload) => state.paymentsList.push(payload)
  },
  actions: {
  },
  modules: {
  }
})
