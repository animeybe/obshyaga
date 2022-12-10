import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { signOut } from "firebase/auth";

const auth = getAuth();

export default {
    state: {
        user: {
            loggedIn: false,
            data: null
          }
    },
    actions: {
        async Register({commit}, { email, password, name}){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                commit('SET_USER', response.user)
                updateProfile(response.user, {displayName: name})
            } else {
                throw new Error('Unable to register user')
            }
        },
        async logIn({commit}, { email, password }){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                commit('SET_USER', response.user)
                commit('SET_LOGGED_IN', true)
            } else {
                throw new Error('login failed')
            }
        },
        // async logOut({commit}){
        //     await signOut(auth)
        //     commit('SET_USER', null)
        // },
    
        async fetchUser({commit} ,user) {
          commit("SET_LOGGED_IN", user !== null);
          if (user) {
            commit("SET_USER", {
              displayName: user.displayName,
              email: user.email
            });
          } else {
            commit("SET_USER", null);
          }
      }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        }
      },
    getters: {
        getUser(state){
          return state.user
        }
      },
}