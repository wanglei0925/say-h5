import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/Index'
import Search from '@/components/index/Search'
import Her from '@/components/index/her'
import Login from '@/components/login/Login'
// 我要出借
import ProjectList from '@/components/project/ProjectList'
import ProjectDetail from '@/components/project/ProjectDetail'
import Prointro from '@/components/project/Prointro'
import ProPart from '@/components/project/ProPart'
import ProRecord from '@/components/project/ProRecord'
import ProData from '@/components/project/ProData'
import ProBorrow from '@/components/project/ProBorrow'



// 我要借款
import Borrow from '@/components/borrow/Borrow'

// 平台信息公告的模块
import About from '@/components/annoce/About'
import Company from '@/components/annoce/Company'
import Kuan from '@/components/annoce/Kuan'
import Pay from '@/components/annoce/Pay'
import Detail from '@/components/annoce/Detail'


//我的账户
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
            path: '/search',
            name: 'search',
            component: Search,
            meta: { h: 2, content: 'better-scroll', noBack: true }
        },
        {
            path: '/her',
            name: 'her',
            component: Her,
            meta: { h: 2, content: 'her', noBack: true }
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
            path: '/prointro/:id',
            name: 'prointro',
            component: Prointro,
            meta: { h: 1, content: '项目详情' }
        },
        {
            path: '/propart/:id',
            name: 'propart',
            component: ProPart,
            meta: { h: 1, content: '标的组成' }
        },
        {
            path: '/prorecord/:id',
            name: 'prorecord',
            component: ProRecord,
            meta: { h: 1, content: '投资记录' }
        },
        {
            path: '/proborrow/:id',
            name: 'proborrow',
            component: ProBorrow,
            meta: { h: 1, content: '借款人信息' }
        },
        {
            path: '/prodata/:id',
            name: 'prodata',
            component: ProData,
            meta: { h: 1, content: '相关资料' }
        },
        // 我要借款的开始
        {
            path: '/borrow',
            name: 'borrow',
            component: Borrow,
            meta: { h: 1, content: '我要借款', }
        },
        // 平台信息公告的模块
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                h: 1,
                content: '关于我们',
            }
        },
        {
            path: '/company',
            name: 'company',
            component: Company,
            meta: {
                h: 1,
                content: '平台公告',
            }
        },
        {
            path: '/pay',
            name: 'pay',
            component: Pay,
            meta: {
                h: 1,
                content: '还款公告',
            }
        },
        {
            path: '/kuan',
            name: 'kuan',
            component: Kuan,
            meta: {
                h: 1,
                content: '放款公告',
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            meta: {
                h: 1,
            }
        },
        // 个人中心的路由
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: { h: 1, content: '个人中心', requiresAuth: true }
        },
    ]
})