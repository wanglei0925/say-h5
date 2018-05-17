import * as types from '../actionType/stateType.js'
const state = {
    navFlag: false,
}
const getters = {
    navFlag: state => state.navFlag
}
const actions = {
    openFlag({ commit, state }) {
        commit(types.NAV_FLAG, true)
    },
    closeFlag({ commit, state }) {
        commit(types.NAV_FLAG, false)
    }
}

const mutations = {
    [types.NAV_FLAG](state, flag) {
        state.navFlag = flag
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}