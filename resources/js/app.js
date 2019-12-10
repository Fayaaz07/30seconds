import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './views/App'

Vue.use(VueRouter);

let app = new Vue({
    el: '#game',
    router: new VueRouter(routes),
    components: {
        App
    },
})