import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

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
  },
  plugins: [createPersistedState()],
})
