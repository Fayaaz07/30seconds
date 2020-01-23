import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//Load base view
import App from './views/App'

//Loading components
import Timer from './components/Timer'
Vue.component('timer', Timer)

import ShowRound from './components/ShowRound'
Vue.component('show-round', ShowRound)

Vue.use(VueRouter);

let app = new Vue({
    el: '#game',
    router: new VueRouter(routes),
    components: {
        App
    },
})
