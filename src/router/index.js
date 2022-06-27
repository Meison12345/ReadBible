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
import FreeTesting from '@/pages/FreeTesting';
import ReadingСontrolText from '@/pages/ReadingСontrolText';
import QuestionsAboutText from '@/pages/QuestionsAboutText';

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
        component: Dominanta,
    },
    {
        path: '/checkrules', //online/indom/rules/letsgo/ - Сделана
        component: CheckRules,
    },
    {
        path: '/speedtest', //Страница Перед тестированием - Попробовать сделать через слоты
        component: SpeedTest,
    },
    {
        path: '/lessonrules', //Правила занятий - Сделана
        component: LessonRules,
    },
    {
        path: '/resultfreetest', //Результат бесплатного тестирования - Сделана
        component: ResultFreeTest,
    },
    {
        path: '/sendteacher', //Отправить сообщение преподавателю
        component: SendTeacher,
    },
    {
        path: '/coursepayment', //Отправить оплаты курса
        component: CoursePayment,
    },
    {
        path: '/autogentraning', //Страница аутогенной тренировки 
        component: AutogenTraning,
    },
    {
        path: '/freetesting', //Страница бесплатной тренировки - Сделана (Текст можно передавать через props, но там <br> и <p>. Не знаю пока как передавать такие программы)
        component: FreeTesting,
    },
    {
        path: '/readingcontroltext', //Страница чтения контрольного результата
        component: ReadingСontrolText,
    },
    {
        path: '/questionsabouttext', //Страница с вопросами
        component: QuestionsAboutText,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;