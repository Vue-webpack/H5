import * as types from '../mutations'



/**
 * @description set mallid
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} id
 */
export function setMallId({ dispatch }, id) {
  dispatch(types.SET_MALL_ID, id)
	localStorage.mall_id = id
}

/**
 * @description set Union id
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} id
 */
export function setUnionId({ dispatch }, id) {
  dispatch(types.SET_UNION_ID, id)
}

/**
 * @description set user id
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} id
 */
export function setUserId({ dispatch }, id) {
  dispatch(types.SET_USER_ID, id)
	localStorage.app_auth_code = id
}

/**
 * @description set user info
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} id
 * @returns
 */
export function setUserInfo({ dispatch }, id) {
	return Vue.http.post('User/UserInfo', {
		app_auth_code: id
	}).then(res => {
		let data = res.data.data
		if (res.data.status === 1) {
			// 存localstorage&vuex
			localStorage.userInfo = JSON.stringify(data)
			dispatch(types.SET_USER_INFO, data)
		}
	})

}

/**
 * @description set wx config
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} url
 * @returns
 */
export function setWxConfig({ dispatch }, url) {
	return Vue.http.post('weixin/getticket', {
		url: url
	}).then(res => {
		return new Vue.Promise((resolve, reject) => {
			let data = res.data
		if(typeof data === 'object'){
			dispatch(types.SET_WX_AUTH, data)
			resolve()
		}else{
			reject(res.data)
		}
		})
	})

}

/**
 * @description  ajax loading
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} status
 */
export function setAjaxLoading({ dispatch }, status) {
	if(status){
	  dispatch(types.AJAX_LOADING)
	}else{
	  dispatch(types.AJAX_LOADED)
	}
}
