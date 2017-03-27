import * as types from '../mutations'
import store from '../store'
import { userId, unionId } from '../getters'


/**
 * @description 登录
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} tel
 * @param {any} pwd
 * @returns
 */
export function authLogin({ dispatch }, tel, pwd) {
	return Vue.http.post('User/wxLogin/', {
		tel: tel,
		pwd: pwd,
		unionid: unionId(store.state)
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.SET_USER_ID, res.data.data.app_auth_code)
				dispatch(types.LOGIN)
				localStorage.app_auth_code = res.data.data.app_auth_code
				resolve(res.data.info)
			}else{
				reject(res.data.info)
			}
		})
	})

}


/**
 * @description 获取验证码
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} tel
 * @returns
 */
export function getEncodedItentifyingCode({ dispatch }, tel) {
	return Vue.http.post('Code/GetCode', {
		tel: tel
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.SET_IDENTIFYING_PHONE, tel)
				dispatch(types.SET_ENCODED_IDENTIFYING_CODE, res.data.data)
				resolve(res.data.info)
			}else{
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 提交验证码，获取用户验证
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} phone
 * @param {any} identifyingCode
 * @param {any} encodedIdentifyingCode
 * @returns
 */
export function checkItentifyingCode({ dispatch }, phone, identifyingCode, encodedIdentifyingCode) {
	return Vue.http.post('User/CheckAuthCode', {
		tel: phone,
		auth_code: identifyingCode,
		en_auth_code: encodedIdentifyingCode
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.SET_IDENTIFYING_SUCCESS)
				dispatch(types.SET_IDENTIFYING_PHONE, phone)
				dispatch(types.SET_ENCODED_IDENTIFYING_CODE, encodedIdentifyingCode)
				dispatch(types.SET_IDENTIFYING_CODE, identifyingCode)
				resolve(res.data.info)
			}else if(res.data.status === 0){
				dispatch(types.SET_IDENTIFYING_FAILURE)
				reject('验证码错误！')
			}else{
				dispatch(types.SET_IDENTIFYING_FAILURE)
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 修改密码成功
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} phone
 * @param {any} identifyingCode
 * @param {any} encodedIdentifyingCode
 * @param {any} pwd
 * @param {any} confirmPwd
 * @param {any} unionId
 * @returns
 */
export function resetPassword({ dispatch }, phone, identifyingCode, encodedIdentifyingCode, pwd, confirmPwd, unionId) {
	return Vue.http.post('User/SetPwd', {
		tel: phone,
		auth_code: identifyingCode,
		en_auth_code: encodedIdentifyingCode,
		pwd: pwd,
		confirm_pwd: confirmPwd,
		unionid: unionId
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.SET_USER_ID, res.data.data.app_auth_code)
				localStorage.app_auth_code = res.data.data.app_auth_code
				dispatch(types.LOGIN)
				resolve(res.data.info)
			}else{
				dispatch(types.LOGOUT)
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 注册step1提交
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} phone
 * @param {any} identifyingCode
 * @param {any} encodedIdentifyingCode
 * @returns
 */
export function registerStepOne({ dispatch }, phone, identifyingCode, encodedIdentifyingCode) {
	return Vue.http.post('User/WxGetUserInfo', {
		tel: phone,
		auth_code: identifyingCode,
		en_auth_code: encodedIdentifyingCode
	})
	.then(res => {



		return new Vue.Promise(function(resolve, reject){

			// 原有用户
			if(res.data.status === 1){
				let data = res.data.data
				dispatch(types.SET_IDENTIFYING_SUCCESS)
				dispatch(types.SET_IDENTIFYING_CODE, identifyingCode)
				dispatch(types.SET_ENCODED_IDENTIFYING_CODE, encodedIdentifyingCode)
				dispatch(types.SET_REAL_NAME, data.real_name)
				dispatch(types.SET_ID_CARD_CODE, data.id_card_code)
				dispatch(types.SET_CARDNO, data.cardno)
				resolve(res.data.status)

			// 新用户
			}else if(res.data.status === 2){
				dispatch(types.SET_IDENTIFYING_SUCCESS)

				dispatch(types.SET_IDENTIFYING_CODE, identifyingCode)
				dispatch(types.SET_ENCODED_IDENTIFYING_CODE, encodedIdentifyingCode)
				resolve(res.data.status)
			}else if(res.data.status === -1){
				dispatch(types.SET_IDENTIFYING_FAILURE)
				reject('验证码错误！')
			}else{
				dispatch(types.SET_IDENTIFYING_FAILURE)
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 注册用户
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} {
 * 	phone,
 * 	identifyingCode,
 * 	encodedIdentifyingCode,
 * 	realName,
 * 	idCardCode,
 * 	pwd,
 * 	confirmPwd,
 * 	mallId,
 * 	unionId,
 * 	status,
 * 	sex,
 * 	cardno
 * }
 * @returns
 */
export function registerFinally({ dispatch }, {
	phone,
	identifyingCode,
	encodedIdentifyingCode,
	realName,
	idCardCode,
	pwd,
	confirmPwd,
	mallId,
	unionId,
	status,
	sex,
	cardno
}) {
	return Vue.http.post('User/WxRegister', {
		tel: phone,
		auth_code: identifyingCode,
		en_auth_code: encodedIdentifyingCode,
		real_name: realName,
		id_number: idCardCode,
		pwd: pwd,
		confirm_pwd: confirmPwd,
		mall_id: mallId,
		unionid: unionId,
		sex: sex,
		status: status
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.LOGIN)
				dispatch(types.SET_USER_ID, res.data.data.app_auth_code)
				localStorage.app_auth_code = res.data.data.app_auth_code
				resolve(res.data.info)
			}else{
				dispatch(types.LOGOUT)
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 设置临时用户信息
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} name
 * @param {any} id
 * @param {any} sex
 */
export function setUserInterim({ dispatch }, name, id, sex){

	dispatch(types.SET_REAL_NAME_INTERIM, name)
	dispatch(types.SET_ID_CARD_CODE_INTERIM, id)
	dispatch(types.SET_SEX_INTERIM, sex)
}


/**
 * @description step3 检查用户卡号是否正确
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} realName
 * @param {any} cardNumber
 * @param {any} idNumber
 * @returns
 */
export function checkCardNumber({ dispatch }, realName, cardNumber, idNumber) {
	return Vue.http.post('User/CheckCard', {
		real_name: realName,
		cardno: cardNumber,
		id_number: idNumber
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){

				dispatch(types.SET_USER_ID, res.data.data.app_auth_code)
				dispatch(types.SET_REAL_NAME, realName)
				dispatch(types.SET_ID_CARD_CODE, idNumber)
				dispatch(types.SET_CARDNO, cardNumber)
				resolve(res.data.info)
			}else{
				reject(res.data.info)
			}
		})

	})
}


/**
 * @description 解绑
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} id
 * @returns
 */
export function unbind({ dispatch }, id) {
	return Vue.http.post('User/WxUnban', {
		app_auth_code: id
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				dispatch(types.SET_USER_ID, '')
				dispatch(types.LOGOUT)
				localStorage.app_auth_code = ''
				resolve(res.data.info)
			}else{
				reject(res.data.info)
			}
		})
	})
}
