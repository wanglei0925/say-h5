import Vue from 'vue'
import Vuex from 'vuex'
import stateStore from './modules/state-store'
import userStore from './modules/user-store'
Vue.use(Vuex)
export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        stateStore,
        userStore
    }
})