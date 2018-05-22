import * as types from '../actionType/stateType.js'
const state = {
    navFlag: false,
    touchFlag: false
}
const getters = {
    navFlag: state => state.navFlag,
    touchFlag: state => state.touchFlag
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
    }
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}