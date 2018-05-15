import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/Index'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: { h: 1, content: '中财微银', noBack: true }
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: { h: 1, content: '中财微银', noBack: true }
        },
    ]
})