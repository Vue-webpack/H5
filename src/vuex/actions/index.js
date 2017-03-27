import {
	setMallId,
	setUnionId,
	setUserId,
	setUserInfo,
	setWxConfig,
	setAjaxLoading
 } from './common'


import	{
	authLogin,
	getEncodedItentifyingCode,
	checkItentifyingCode,
	resetPassword,
	registerStepOne,
	registerFinally,
	setUserInterim,
	checkCardNumber,
	unbind
} from './auth'


import {
	getShopList,
	getRankList,
	getShopCateList,
	getShopFloorList,
	getShopDetail,
	shopFollow
} from './shop'

// common
export {
	setMallId,
	setUnionId,
	setUserId,
	setUserInfo,
	setWxConfig,
	setAjaxLoading
}


// auth
export {
	authLogin,
	getEncodedItentifyingCode,
	checkItentifyingCode,
	resetPassword,
	registerStepOne,
	registerFinally,
	setUserInterim,
	checkCardNumber,
	unbind
}


// shop
export {
	getShopList,
	getRankList,
	getShopCateList,
	getShopFloorList,
	getShopDetail,
	shopFollow
}
