import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
import ProjectList from '@/components/project/ProjectList'
import ProjectDetail from '@/components/project/ProjectDetail'

import User from '@/components/user/user'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [{
            path: '/',
            redirect: '/index'
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
        {
            path: '/projectlist',
            name: 'projectlist',
            component: ProjectList,
            meta: { h: 1, content: '我要出借' }
        },
        {
            path: '/projectdetail/:id',
            name: 'projectdetail',
            component: ProjectDetail,
            meta: { h: 1, content: '' }
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: { h: 1, content: '个人中心', requiresAuth: true }
        },
    ]
})