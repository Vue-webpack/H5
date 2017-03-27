import { handleErr } from '../../utils'
import { wxConfig } from '../../vuex/getters'
import { setWxConfig } from '../../vuex/actions'


let wxConfigOnlyBaseMenu = {
	vuex: {
		getters: {
			wxConfig
		},

		actions: {
			setWxConfig
		}
	},
	methods: {
		_setWxConfigOnlyBaseMenu() {
			return this.setWxConfig(window.location.href)
				.then(res => {
					wx.config({
						debug: false,
						appId: this.wxConfig.appId,
						timestamp: this.wxConfig.timestamp,
						nonceStr: this.wxConfig.nonceStr,
						signature: this.wxConfig.signature,
						jsApiList: [
							"hideAllNonBaseMenuItem"
						]
					})

					wx.ready(function () {
						wx.hideAllNonBaseMenuItem()
					})
				})
		}
	}
}

export { wxConfigOnlyBaseMenu }