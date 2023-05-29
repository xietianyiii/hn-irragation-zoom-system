import PublishMapServerButton from './publish-map-server-button/index.vue';
import PublishedMapServerList from './published-map-server-list/index.vue';



import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'
import "@/assets/fontFamily/font.css"

// const setProductInfo = (Vue, options) => {
//   Vue.prototype.$vformInfo = {
//     productName: (options && options.productName) || '',
//     productTitle: (options && options.productTitle) || ''
//   }
// }

PublishMapServerButton.install = function (Vue, options) {
    Vue.component(PublishMapServerButton.name, PublishMapServerButton)
}

PublishedMapServerList.install = function (Vue, options) {
    Vue.component(PublishedMapServerList.name, PublishedMapServerList)
}


const components = [
    PublishMapServerButton,
    PublishedMapServerList
]

// 告诉服务器去哪里找静态资源文件
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));


const install = (Vue, options) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    /* script方式引入时主动调用install方法！！ */
    install(window.Vue);
}

export default {
    install,
    PublishMapServerButton,
    PublishedMapServerList
}