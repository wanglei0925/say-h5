import VueCookie from 'vue-cookie'
import * as types from '../actionType/userType'
const state = {
    userInfo: {},
    loginIn: VueCookie.get("login_in") || 0,
}
const getters = {
    userInfo: state => state.userInfo,
    loginIn: state => state.loginIn
}
const actions = {
    login({ commit, state }, params) {
        VueCookie.set("login_in", 1);
        commit(types.USER_LOGIN_IN);
    },
    loginout({ commit, state }, params) {
        VueCookie.set("login_in", 0);
        commit(types.USER_LOGIN_OUT);
    },
}
const mutations = {
    [types.USER_LOGIN_IN]: (state) => {
        state.loginIn = 1;
    },
    [types.USER_LOGIN_OUT]: (state) => {
        state.loginIn = 0;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}