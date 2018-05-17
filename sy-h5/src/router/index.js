import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [{
            path: '/',
            name: 'index',
            component: Index,
            meta: { h: 1, content: '中财微银', noBack: true }
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: { h: 1, content: '中财微银', noBack: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { h: 1, content: '登录', noBack: true }
        },
    ]
})