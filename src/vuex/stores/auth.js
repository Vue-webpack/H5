import * as types from '../mutations'



 const state = {
	loginStatus: null,

	// 重置密码，用户验证
	identifyingStatus: null,
	identifyingPhone: null,
	codedIdentifyingCode: null,
	encodedIdentifyingCode: null,
	// 原有用户数据
	realName: null,
	idCardCode: null,
	cardNo: null,
	// 临时用户数据
	realNameInterim: null,
	idCardCodeInterim: null,
	sexInterim: null

 }

const mutations = {
	[types.LOGIN](state) {
		state.loginStatus = true
	},
	[types.LOGOUT](state) {
		state.loginStatus = false
	},

	[types.SET_IDENTIFYING_SUCCESS](state) {
		state.identifyingStatus = 'success'
	},
	[types.SET_IDENTIFYING_FAILURE](state) {
		state.identifyingStatus = 'failure'
	},
	[types.SET_ENCODED_IDENTIFYING_CODE](state, code) {
		state.encodedIdentifyingCode = code
	},
	[types.SET_IDENTIFYING_CODE](state, code) {
		state.identifyingCode = code
	},
	[types.SET_IDENTIFYING_PHONE](state, phone) {
		state.identifyingPhone = phone
	},
	// 原有用户数据操作
	[types.SET_REAL_NAME](state, name) {
		state.realName = name
	},
	[types.SET_ID_CARD_CODE](state, code) {
		state.idCardCode = code
	},
	[types.SET_CARDNO](state, no) {
		state.cardNo = no
	},
	// 临时设置用户数据
	[types.SET_REAL_NAME_INTERIM](state, name) {
		state.realNameInterim = name
	},
	[types.SET_ID_CARD_CODE_INTERIM](state, code) {
		state.idCardCodeInterim = code
	},
	[types.SET_SEX_INTERIM](state, sex) {
		state.sexInterim = sex
	},
}


 export default {
  state,
  mutations
}
