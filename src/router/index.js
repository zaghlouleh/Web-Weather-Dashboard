import { createRouter, createWebHistory } from 'vue-router'
import CityData from '../views/CityData.vue'

const routes = [{
        path: '/CityData',
        name: 'CityData',
        component: CityData
    },
    {
        path: '/',
        name: 'InputData',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/InputData.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router