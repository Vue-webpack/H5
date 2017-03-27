// import { SET_MALL_ID, SET_USER_ID, SET_USER_INFO, SET_UNION_ID } from '../mutations'
import * as types from '../mutations'

 const state = {
	 mallId: null,
	 userId: null,
	 unionId: null,
	 userInfo: null,
	 wxConfig: null,
	 ajaxLoading: false
 }

 const mutations = {
	[types.SET_MALL_ID](state, id) {
		state.mallId = id
	},
	[types.SET_UNION_ID](state, id){
		state.unionId = id
	},
	[types.SET_USER_ID](state, id){
		state.userId = id
	},
	[types.SET_USER_INFO](state, data){
		state.userInfo = data
	},
	[types.SET_WX_AUTH](state, data){
		state.wxConfig = data
	},
	[types.AJAX_LOADING](state){
		state.ajaxLoading = true
	},
	[types.AJAX_LOADED](state){
		state.ajaxLoading = false
	}




 }

 export default {
  state,
  mutations
}
