import * as url from './mock-http-url'
import axios from 'axios'
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
}