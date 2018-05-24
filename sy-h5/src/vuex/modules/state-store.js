import * as types from '../actionType/stateType.js'
const state = {
    navFlag: false,
    touchFlag: false,
    tipsFlag: false,
    tipsText: '',
    confirmFlag: false,
    quitState: '',
    changeTitle: '中财微银',
}
const getters = {
    navFlag: state => state.navFlag,
    touchFlag: state => state.touchFlag,
    tipsFlag: state => state.tipsFlag,
    tipsText: state => state.tipsText,
    confirmFlag: state => state.confirmFlag,
    quitState: state => state.quitState,
    changeTitle: state => state.changeTitle,
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
    confirmShow({ commit, state }) {
        commit(types.CONFIRM_SHOW)
    },
    confirmHide({ commit, state }) {
        commit(types.CONFIRM_HIDE)
    },
    confirmToggle({ commit, state }, flag) {
        commit(types.CONFIRM_TOGGLE, flag)
    },
    quitShow({ commit, state }) {
        commit(types.CONFIRM_TOGGLE, false)
        commit(types.QUIT_SURE)
    },
    quitHide({ commit, state }) {
        commit(types.CONFIRM_TOGGLE, false)
        commit(types.QUIT_CANCLE)
    },
    headerTitle({ commit, state }, data) {
        commit(types.CHANGE_TITLE, data)
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
    },
    [types.CONFIRM_TOGGLE]: (state, flag) => {
        state.confirmFlag = flag;
    },
    [types.CONFIRM_SHOW]: (state) => {
        state.confirmFlag = true;
    },
    [types.CONFIRM_HIDE]: (state) => {
        state.confirmFlag = false;
    },
    [types.QUIT_SURE]: (state) => {
        state.quitState = true;
    },
    [types.QUIT_CANCLE]: (state) => {
        state.quitState = false;
    },
    [types.CHANGE_TITLE]: (state, data) => {
        state.changeTitle = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}