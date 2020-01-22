import Home from './views/Home'
import Game from './views/Game'
import App from './views/App'


export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
        {
            path: '/app',
            name: 'app',
            component: App
        },
    ]
}