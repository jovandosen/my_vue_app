import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.filter('cut', function (value) {
    if (!value) return ''
    value = value.toString()
    value = value.substring(0, 14)
    value = value + '...'
    return value
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
