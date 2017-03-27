import { Toast } from 'mint-ui'

Vue.directive("unfinished", {
	params: ['index'],
	bind: function () {
		if (this.params.index == '1') {
			this.el.addEventListener('click', function (e) {
				Toast('敬请期待！')
				e.preventDefault()
			})
		}
	}
})
