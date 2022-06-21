import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Main from '@/pages/Main';
import Authorization from '@/pages/Authorization';
import Dominanta from '@/pages/Dominanta';
import CheckRules from '@/pages/CheckRules';
import SpeedTest from '@/pages/SpeedTest';
import LessonRules from '@/pages/LessonRules';
const routes = [{
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
    },
    {
        path: '/CheckRules',
        component: CheckRules
    },
    {
        path: '/speedtest',
        component: SpeedTest
    },
    {
        path: '/lessonrules',
        component: LessonRules
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;