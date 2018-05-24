import VueCookie from 'vue-cookie'
import * as types from '../actionType/userType'
import { loginApi } from "@/api/user-wwl.js";
const state = {
    userInfo: JSON.parse(VueCookie.get("token_user")) || {},
    loginIn: VueCookie.get("login_in") || 0,
}
const getters = {
    userInfo: state => state.userInfo,
    loginIn: state => state.loginIn
}
const actions = {
    login({ dispatch, commit, state }, params) {
        VueCookie.set("login_in", 1);
        dispatch('userinfo');
        commit(types.USER_LOGIN_IN);
    },
    loginout({ commit, state }, params) {
        VueCookie.delete("login_in");
        VueCookie.delete("token_user");
        commit(types.USER_LOGIN_OUT);
    },
    userinfo({ commit, state }) {
        loginApi.getUser().then((response) => {
            if (response.status) {
                VueCookie.set("token_user", JSON.stringify(response.data));
                commit(types.USER_INFO, response.data)
            }

        })
    }
}
const mutations = {
    [types.USER_LOGIN_IN]: (state) => {
        state.loginIn = 1;
    },
    [types.USER_LOGIN_OUT]: (state) => {
        state.loginIn = 0;
        state.userInfo = {};
    },
    [types.USER_INFO]: (state, data) => {
        state.userInfo = data;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}