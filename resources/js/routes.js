import Home from './views/Home'
import Game from './views/Game'

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
        
    ]
}