import { createStore } from 'vuex'

const store = createStore({
    strict: true,
    state: {
        token: localStorage.getItem('token') || null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        }
    }
})

store.dispatch("init");

export default store;