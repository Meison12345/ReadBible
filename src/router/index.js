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
import CoursePayment from '@/pages/CoursePayment';
import AutogenTraning from '@/pages/AutogenTraning';

const routes = [{
        path: '/',
        component: Main // Главная страница - Сделана
    },
    {
        path: '/authorization', //Авторизация - Сделана
        component: Authorization
    },
    {
        path: '/dominanta', //КУРС - Оглавление
        component: Dominanta
    },
    {
        path: '/checkrules', //online/indom/rules/letsgo/ - Сделана
        component: CheckRules
    },
    {
        path: '/speedtest', //Страница Перед тестированием
        component: SpeedTest
    },
    {
        path: '/lessonrules', //Правила занятий - Сделана
        component: LessonRules
    },
    {
        path: '/resultfreetest', //Результат бесплатного тестирования - Сделана
        component: ResultFreeTest
    },
    {
        path: '/sendteacher', //Отправить сообщение преподавателю
        component: SendTeacher
    },
    {
        path: '/coursepayment', //Отправить сообщение преподавателю
        component: CoursePayment
    },
    {
        path: '/autogentraning', //Страница аутогенной тренировки
        component: AutogenTraning
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;