import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/index/Index'
// import Search from '@/components/index/Search'
// import Her from '@/components/index/her'
import Login from '@/components/login/Login'
const Index = () =>
    import ( /* webpackChunkName: "group-foo1" */ '@/components/index/Index')
const Search = () =>
    import ( /* webpackChunkName: "group-foo2" */ '@/components/index/Search')
const Her = () =>
    import ( /* webpackChunkName: "group-foo3" */ '@/components/index/her')

const ProjectList = () =>
    import ( /* webpackChunkName: "group-foo4" */ '@/components/project/ProjectList')

const ProjectDetail = () =>
    import ( /* webpackChunkName: "group-foo5" */ '@/components/project/ProjectDetail')
    // 我要出借
    // import ProjectList from '@/components/project/ProjectList'
    // import ProjectDetail from '@/components/project/ProjectDetail'
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

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

export default new Router({
    mode: 'history',
    scrollBehavior,
    // scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: { h: 1, content: '中财微银', noBack: true, scrollToTop: true }
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            meta: { h: 2, content: 'better-scroll', noBack: true, scrollToTop: true }
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
            meta: { h: 1, content: '我要出借', scrollToTop: true }
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
            meta: { h: 2, content: '我要借款', }
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