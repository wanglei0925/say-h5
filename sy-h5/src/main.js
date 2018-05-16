// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import fastclick from 'fastclick'
import * as filters from './filters'
import { VeeValidate, config } from './validate'
import * as url from '@/api/request-path'
// Vue.prototype.axios = axios
Vue.prototype.STORAGE_URL = url.STORAGE_URL
Vue.prototype.API_URL = url.API_URL
Vue.prototype.PIC_URL = url.PIC_URL
Vue.prototype.MY_URL = url.MY_URL
Vue.prototype.RETURN_URL = url.MY_URL + "/returnResult"

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
fastclick.attach(document.body)
    // 过滤器
Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
    // 表单验证
Vue.use(VeeValidate, config)


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    console.log('request')
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    // if (response.data.data == '0000') {
    //     store.dispatch('logoutState')
    // }
    console.log('response')
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
    if (to.query.source) {
        VueCookie.set('source', to.query.source)
    }
    if ((to.meta.requiresAuth || to.path.indexOf("/user") > -1) && store.getters.loginIn == 0) {
        //未登录不可访问
        router.push({ name: 'login', query: { back: to.fullPath } });
    } else if (to.meta.noLogin && store.getters.loginIn == 1) {
        //登录不可访问
        router.push('/');
    } else {
        next();
    }
})

router.afterEach((to, from) => {
    if (to.fullPath != from.fullPath && from.path != "/") {
        VueCookie.set("back_url", from.path);
    }

    window.scroll(0, 0);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})