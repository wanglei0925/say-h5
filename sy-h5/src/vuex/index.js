import Vue from 'vue'
import Vuex from 'vuex'
import stateStore from './modules/state-store'
Vue.use(Vuex)
export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        stateStore,
    }
})