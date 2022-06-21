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
import ResultFreeTest from '@/pages/ResultFreeTest';
import SendTeacher from '@/pages/SendTeacher';

const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/authorization', //Авторизация
        component: Authorization
    },
    {
        path: '/dominanta', //КУРС - Оглавление
        component: Dominanta
    },
    {
        path: '/checkrules', //online/indom/rules/letsgo/
        component: CheckRules
    },
    {
        path: '/speedtest', //Страница Перед тестированием
        component: SpeedTest
    },
    {
        path: '/lessonrules', //Правила занятий
        component: LessonRules
    },
    {
        path: '/resultfreetest', //Результат бесплатного тестирования
        component: ResultFreeTest
    },
    {
        path: '/sendteacher', //Отправить сообщение преподавателю
        component: SendTeacher
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;