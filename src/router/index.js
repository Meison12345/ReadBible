import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Authorization from '@/pages/Authorization';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/authorization',
        component: Authorization
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
