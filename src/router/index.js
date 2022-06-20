import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Authorization from '@/pages/Authorization';
import Dominanta from '@/pages/Dominanta';
import CheckRules from '@/pages/CheckRules';
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/authorization',
        component: Authorization
    },
    {
        path: '/Dominanta',
        component: Dominanta
    }
    ,
    {
        path: '/CheckRules',
        component: CheckRules
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
