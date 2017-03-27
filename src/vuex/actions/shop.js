
/**
 * @description 获取银行列表
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} mallId
 * @returns
 */
export function getRankList ({ dispatch }, area, page, rows) {
	return Vue.http.post('easyplay/platform/unLogin/fingPcProductPager.do', {
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 200){
				resolve(res.data.data)
			}else{
				reject(res.data.info)
			}
		})
	})
}


/**
 * @description 获取商户详情
 *
 * @export
 * @param {any} { dispatch }
 * @param {any} shopId
 * @returns
 */
export function getShopDetail ({ dispatch }, shopId, userId) {
	return Vue.http.post('Shop/ShopInfo', {
		shop_id: shopId,
		app_auth_code: userId
	})
	.then(res => {
		return new Vue.Promise(function(resolve, reject){
			if(res.data.status === 1){
				resolve(res.data.data)
			}else{
				reject(res.data.info)
			}
		})
	})
}
