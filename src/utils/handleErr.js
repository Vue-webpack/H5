import { Toast } from 'mint-ui';

export default function (err) {
	if (typeof err === 'string') {
		Toast(err)
	} else {
		console.error(err)
	}
}