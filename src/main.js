import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// new Vue({
//     router,
//     render: h => h(App),
// }).mount('#app')