
window.Vue = require('vue');

Vue.component('game', require('./components/Game.vue').default);

const app = new Vue({
    el: '#game',
});
