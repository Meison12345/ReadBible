"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Main = _interopRequireDefault(require("@/pages/Main"));

var _Authorization = _interopRequireDefault(require("@/pages/Authorization"));

var _Dominanta = _interopRequireDefault(require("@/pages/Dominanta"));

var _CheckRules = _interopRequireDefault(require("@/pages/CheckRules"));

var _SpeedTest = _interopRequireDefault(require("@/pages/SpeedTest"));

var _LessonRules = _interopRequireDefault(require("@/pages/LessonRules"));

var _ResultFreeTest = _interopRequireDefault(require("@/pages/ResultFreeTest"));

var _SendTeacher = _interopRequireDefault(require("@/pages/SendTeacher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Main["default"] // Главная страница

}, {
  path: '/authorization',
  //Авторизация
  component: _Authorization["default"]
}, {
  path: '/dominanta',
  //КУРС - Оглавление
  component: _Dominanta["default"]
}, {
  path: '/checkrules',
  //online/indom/rules/letsgo/
  component: _CheckRules["default"]
}, {
  path: '/speedtest',
  //Страница Перед тестированием
  component: _SpeedTest["default"]
}, {
  path: '/lessonrules',
  //Правила занятий
  component: _LessonRules["default"]
}, {
  path: '/resultfreetest',
  //Результат бесплатного тестирования
  component: _ResultFreeTest["default"]
}, {
  path: '/sendteacher',
  //Отправить сообщение преподавателю
  component: _SendTeacher["default"]
}];
var router = (0, _vueRouter.createRouter)({
  routes: routes,
  history: (0, _vueRouter.createWebHistory)()
});
var _default = router;
exports["default"] = _default;