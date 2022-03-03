import { createStore } from 'vuex'

export default createStore({
  state: {
    language: 'en',
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language; 
    },
  },
  getters: {
    language: state => state.language,
  }
})
