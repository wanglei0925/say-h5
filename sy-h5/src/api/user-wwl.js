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