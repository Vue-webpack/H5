// 引用框架&库
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import filters from '../filters/index.js'
import '../components/direction/commonDirection'

// 写入css
import '../assets/scss/common/app.scss'
import '../assets/scss/common/mui.scss'


// app 配置
// 引用VueTouch插件
Vue.use(VueTouch)

// 配置插件 resource&touch
Vue.use(VueResource)
Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

//Vue.http.options.root = `${URL}/api`;
//Vue.http.options.root = 'easyplay';

//Vue.http.options.root = 'easyplay';
Vue.http.options.emulateJSON = true

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

//开启debug模式
Vue.config.debug = true

// 定义全局transition
Vue.transition('fade', {
    enterClass: 'fade-in',
    leaveClass: 'fade-out'
})

Vue.transition('tabfade', {
    enterClass: 'fade-in',
    // leaveClass: 'fade-out'
})

Vue.transition('shrink', {
    enterClass: 'shrink-in',
    leaveClass: 'shrink-out'
})

Vue.transition('up', {
    enterClass: 'up-in',
    leaveClass: 'up-out'
})

Vue.transition('tabup', {
    enterClass: 'up-in',
    // leaveClass: 'up-out'
})


Vue.transition('down', {
    enterClass: 'down-in',
    leaveClass: 'down-out'
})


Vue.transition('left', {
    enterClass: 'left-in',
    leaveClass: 'left-out'
})


Vue.transition('right', {
    enterClass: 'right-in',
    leaveClass: 'right-out'
})
