import Vuex from 'vuex'


// 导入各个模块的初始状态和 mutations
import common from './stores/common'
import auth from './stores/auth'
// import auth from './modules/auth'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		common,
		auth
	}
})
