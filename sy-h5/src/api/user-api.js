import * as url from './mock-http-url'
import VueCookie from 'vue-cookie'
import axios from 'axios'

//获取轮播图
export const comApi = {
    checkImgCode() {
        return axios.get(url.IMG_CODE).then((response) => {
            return response.data
        })
    },
    getCode() {
        // return url.COMMON_ENCRYPT + '?' + Math.random();
        return axios.get(url.COMMON_ENCRYPT + '?' + Math.random(), { responseType: 'blob' }).then((response) => {
            return response.data
        })
    },
    comSMS(params) {
        return axios.get(url.COMMON_SENDSMS, { params: params }).then((response) => {
            return response.data
        })
    }
}

export const loginApi = {
    login(params) {
        return axios.get(url.LOGIN, { params: params }).then((response) => {
            return response.data
        })
    },
    logout() {
        return axios.get(url.USER_LOGOUT).then((response) => {
            return response.data
        })
    },
    detail(id) {
        return axios.get(url.ART_DETAIL + id).then((response) => {
            return response.data
        })
    },
    content(url) {
        return axios.get(url).then((response) => {
            return response.data
        })
    }
}

export const userApi = {
    register(params) {
        let from_user = VueCookie.get('source')
        if (from_user) {
            params.source = from_user;
        }
        return axios.get(url.REGISTER, { params: params }).then((response) => {
            if (response.status) {
                VueCookie.delete('source')
            }
            return response.data
        })
    },
    forget(params) {
        return axios.get(url.FORGET, { params: params }).then((response) => {
            return response.data
        })
    },
    updatePwd(params) {
        return axios.get(url.USER_UPDATEPWD, { params: params }).then((response) => {
            return response.data
        })
    },
    gift(params) {
        return axios.get(url.USER_GIFT, { params: params }).then((response) => {
            return response.data
        })
    },
    toSign() {
        return axios.get(url.USER_SIGN).then((response) => {
            return response.data
        })
    },
    userAccount() {
        return axios.get(url.USER_ACCOUNT).then((response) => {
            return response.data
        })
    },
    userLoan(params) {
        return axios.get(url.USER_LOAN, { params: params }).then((response) => {
            return response.data
        })
    },

    loanConfirmInfo(params) {
        return axios.get(url.LOAN_CONFIRM_ONE + params).then((response) => {
            return response.data
        })
    },
    loanConfirm(params) {
        return axios.get(url.LOAN_CONFIRM, { params: params }).then((response) => {
            return response.data
        })
    },
    loanConfirmImg(params) {
        return axios.get(url.LOAN_CONFIRM_IMG, { params: params }).then((response) => {
            return response.data
        })
    },
    // Get the user contract list.
    loanConfirmlist(params) {
        return axios.get(url.LOAN_CONFIRM_LIST + params).then((response) => {
            return response.data
        })
    },
    // MARK sure confirm.
    sureConfirm(params) {
        return axios.get(url.SURE_CONFIRM, { params: params }).then((response) => {
            return response.data
        })
    },

    flow(params) {
        return axios.get(url.USER_LOAN_BILL, { params: params }).then((response) => {
            return response.data
        })
    },
    bill(params) {
        return axios.get(url.USER_LOAN_BILL, { params: params }).then((response) => {
            return response.data
        })
    },
    userQuery() {
        return axios.get(url.PAY_USER_QUERY).then((response) => {
            return response.data
        })
    },
    getUser() {
        return axios.get(url.USER).then((response) => {
            return response.data
        })
    },
    getContract(params) {
        return axios.get(url.GET_AGREEMENT + params).then((response) => {
            return response.data
        })
    },
}