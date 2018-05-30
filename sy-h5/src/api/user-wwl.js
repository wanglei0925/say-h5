import * as url from './mock-http-url'
import axios from 'axios'
import { STORAGE_URL } from './request-path'
//获取轮播图

export const bannerApi = {
    list() {
        return axios.get(url.BANNER_LIST).then((response) => {
            return response.data
        })
    }
}
export const projectApi = {
    list(params) {
        return axios.get(url.PRO_LIST, { params: params }).then((response) => {
            return response.data
        })
    },
    page(params) {
        return axios.get(url.PRO_PAGE, { params: params }).then((response) => {
            return response.data
        })
    },
    detail(id) {
        return axios.get(url.PRO_DETAIL + id).then((response) => {
            return response.data
        })
    },
    invest(params) {
        return axios.get(url.PRO_INVEST, { params: params }).then((response) => {
            return response.data
        })
    },
}
export const loginApi = {
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
    },
    login(params) {
        return axios.get(url.LOGIN, { params: params }).then((response) => {
            return response.data;
        })
    },
    loginout() {
        return axios.get(url.USER_LOGOUT).then((response) => {
            return response.data;
        })
    },
    getUser() {
        return axios.get(url.USER).then((response) => {
            return response.data
        })
    },
}
export const articleApi = {
    list(params) {
        return axios.get(url.ART_LIST, { params: params }).then((response) => {
            return response.data
        })
    },

    page(params) {
        return axios.get(url.ART_PAGE, { params: params }).then((response) => {
            return response.data
        })
    },

    detail(id) {
        return axios.get(url.ART_DETAIL + id).then((response) => {
            return response.data
        })
    },

    content(url) {
        return axios.get(url, { responseType: 'text', withCredentials: false }).then((response) => {
            return response.data
        })
    },
    content2(id) {
        return axios.get(STORAGE_URL + id, { responseType: 'text', withCredentials: false }).then((response) => {
            return response.data
        })
    },

}

export const tradeApi = {
    list(params) {
        return axios.get(url.TRADE_LIST, { params: params }).then((response) => {
            return response.data
        })
    },

    page(params) {
        return axios.get(url.TRADE_PAGE, { params: params }).then((response) => {
            return response.data
        })
    },

    detail(id) {
        return axios.get(url.TRADE_DETAIL + id).then((response) => {
            return response.data
        })
    },

    loanInfo(id) {
        return axios.get(url.LOAN_INFO + id).then((response) => {
            return response.data
        })
    },
    ranking() {
        return axios.get(url.TRADE_RANKING).then((response) => {
            return response.data
        })
    },
    loanList() {
        return axios.get(url.TRADE_LOANLIST).then((response) => {
            return response.data
        })
    }
}