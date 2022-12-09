import { createStore } from 'vuex'
import auth from './auth'

// Create a new store instance.
const store = createStore({
  modules: {
    auth,
  }
})

export default store;