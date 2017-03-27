
// 引入router
import { router } from './route/route-config'

// app运行配置
import './config/app-config'

// 从localStorage获取数据，存储到vuex
import store from './vuex/store'
import { setMallId,setUnionId, setUserId, setUserInfo, getAboutUs } from './vuex/actions'
import { userId, mallId, ajaxLoading } from './vuex/getters'
import * as types from './vuex/mutations'
//import { Spinner } from 'mint-ui'


// 扩展根对象
let app = Vue.extend({
    //components: {'spinner': Spinner},
    store: store,
    data() {
        return {
            loading: true
        }
    },

    vuex: {
        getters: {
            ajaxLoading
        }
    },

    ready() {
        this.loading = false
    }
})

// 挂载路由
router.start(app, '#app')
