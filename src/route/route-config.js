import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入vuex
import store from '../vuex/store'
import { loginStatus } from '../vuex/getters'

// 创建一个路由器实例
let router = new VueRouter({
    hashbang: false,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})


// 路由配置
router.map({

    //首页
    '/index': {
        name: 'index',
        auth: 'norequire d',
        component: function (resolve) {
            require(['../views/index.vue'], resolve);
        }
    },

})

router.redirect({
  '*': '/index'
})

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach(({to, next, redirect}) => {
    let _loginStatus = loginStatus(store.state)

    if(to.auth === 'norequired'){
        next()
    }else if(to.auth === 'shouldlogin'){
        if(_loginStatus){
            next()
        }else{
            redirect({name: 'registerStepOne'});
        }
    }else if(to.auth === 'shouldnologin'){
        if(_loginStatus){
            redirect({name: 'index'})
        }else{
            next()
        }
    }else{
        next()
    }
})


export { router }
