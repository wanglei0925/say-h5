import * as types from '../actionType/stateType.js'
const state = {
    navFlag: false,
    touchFlag: false,
    tipsFlag: false,
    tipsText: '',
}
const getters = {
    navFlag: state => state.navFlag,
    touchFlag: state => state.touchFlag,
    tipsFlag: state => state.tipsFlag,
    tipsText: state => state.tipsText
}
const actions = {
    openFlag({ commit, state }) {
        commit(types.NAV_FLAG, true)
    },
    closeFlag({ commit, state }) {
        commit(types.NAV_FLAG, false)
    },
    touchStart({ commit, state }) {
        commit(types.TOUCH_START)
    },
    touchMove({ commit, state }) {
        commit(types.TOUCH_MOVE)
    },
    tipsShow({ commit, state }, data) {
        commit(types.TIPS_SHOW, data)
    },
    tipsHide({ commit, state }) {
        commit(types.TIPS_HIDE)
    },

}

const mutations = {
    [types.NAV_FLAG](state, flag) {
        state.navFlag = flag
    },
    [types.TOUCH_START](state) {
        state.touchFlag = true;
    },
    [types.TOUCH_MOVE](state) {
        state.touchFlag = false;
    },
    [types.TIPS_SHOW]: (state, data) => {
        state.tipsFlag = true;
        state.tipsText = data;
    },
    [types.TIPS_HIDE]: (state, data) => {
        state.tipsFlag = false;
        state.tipsText = '';
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}