<!--Отрисовка блока уроков -->
<template>
    <div class="col-12">
        <div class="wrap-lessons">
            <div class="lessons-bar">
                <div class="lessons-bar_title">Урок</div>
                <ul class="lessons-bar_list">
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                </ul>
            </div>
            <div class="lesson-content">
                <div class="lesson-content_title">Как вы читаете. Первое правило быстрого чтения.</div>
                <div class="lesson-content_text">Цель урока - провести анализ количественных и качественных показателей
                    вашего чтения, а также освоить первое упражнение техники быстрого чтения.</div>
                <div class="lesson-content_items">
                    <div class="item">
                        <span class="lesson-content_count">7</span>
                        <span>тем</span>
                    </div>
                    <div class="item">
                        <span class="lesson-content_count">1</span>
                        <span>упражнение</span>
                    </div>
                    <div class="item">
                        <span class="lesson-content_count">1</span>
                        <span>домашнее задание </span>
                    </div>
                </div>
            </div>
            <div id="lesson-accordion" class="lesson-accordion">
                <div class="lesson-accordion_item">
                    <div id="head-1">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-1" aria-expanded="true" aria-controls="lesson-1" @click="openDetails">
                            Введение
                        </div>
                    </div>
                    <transition name="fade">
                        <div id="lesson-1" class="collapse collapse-anim" aria-labelledby="head-1"
                            data-parent="#lesson-accordion" v-show="show">
                            <div class="lesson-accordion_item__content">
                                <ul>
                                    <li class="active">
                                        <a href="#">
                                            <span class="count-list">1.1</span>
                                            <span class="lesson-title">Введение к программе освоения техники быстрого
                                                чтения</span>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="count-list">1.2</span>
                                            <span class="lesson-title"> Когда и где используется техника быстрого
                                                чтения</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="count-list">1.3</span>
                                            <span class="lesson-title">Что такое быстрое чтение</span>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="count-list">1.4</span>
                                            <span class="lesson-title">Пять способов чтения</span>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="lesson-accordion_item">
                    <div id="head-2">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-2" aria-expanded="true" aria-controls="lesson-2" @click="openDetails">
                            Недостатки традиционых методов чтения
                            <span class="status">
                                <span class="process">В процессе</span>
                            </span>
                        </div>
                    </div>
                    <div id="lesson-2" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-3">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-3" aria-expanded="true" aria-controls="lesson-3" @click="openDetails">
                            Как определить скорость своего чтения?

                        </div>
                    </div>
                    <div id="lesson-3" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-4">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-4" aria-expanded="true" aria-controls="lesson-4" @click="openDetails">
                            Как определить объем читаемого текста?

                        </div>
                    </div>
                    <div id="lesson-4" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-5">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-5" aria-expanded="true" aria-controls="lesson-5" @click="openDetails">
                            Время чтения

                        </div>
                    </div>
                    <div id="lesson-5" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-6">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-6" aria-expanded="true" aria-controls="lesson-6" @click="openDetails">
                            Задания
                        </div>
                    </div>
                    <div id="lesson-6" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-7">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-7" aria-expanded="true" aria-controls="lesson-7" @click="openDetails">
                            Почему мы читаем с регрессиями
                        </div>
                    </div>
                    <div id="lesson-7" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-8">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-8" aria-expanded="true" aria-controls="lesson-8" @click="openDetails">
                            Упражнения
                        </div>
                    </div>
                    <div id="lesson-8" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lesson-accordion_item">
                    <div id="head-9">
                        <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                            data-target="#lesson-9" aria-expanded="true" aria-controls="lesson-9" @click="openDetails">
                            Домашнее задание
                        </div>
                    </div>
                    <div id="lesson-9" class="collapse collapse-anim" aria-labelledby="head-1"
                        data-parent="#lesson-accordion" v-show="show">
                        <div class="lesson-accordion_item__content">
                            <ul>
                                <li class="active">
                                    <a href="#"><span class="count-list">1.1</span>Введение к программе освоения
                                        техники
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.2</span>Когда и где используется техника
                                        быстрого чтения</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.3</span>Что такое быстрое чтение</a>
                                </li>
                                <li>
                                    <a href="#"><span class="count-list">1.4</span>Пять способов чтения</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'lessons-block',
    data() {
        return {
            mas: [],
            show: false,
        }
    },
    props: {
        modelValue: {
            type: String
        },
        lessons: {
            type: Object,
        }
    },
    methods: {
        openDetails(event) {
            const currentTarget = event.target.parentNode.parentNode.children[1].style.display;
            let greenPoint = event.target.parentNode.parentNode.children[0].children[0];

            if (currentTarget === 'block') {
                event.target.parentNode.parentNode.children[1].classList.remove('collapse-anim')
                event.target.parentNode.parentNode.children[1].classList.add('collapse-anim-reverse')
                greenPoint.classList.add('collapsed');
                event.target.parentNode.parentNode.children[1].style.display = 'none';
            } else {
                event.target.parentNode.parentNode.children[1].classList.remove('collapse-anim-reverse')
                event.target.parentNode.parentNode.children[1].classList.add('collapse-anim')
                greenPoint.classList.remove('collapsed');
                event.target.parentNode.parentNode.children[1].style.display = 'block';
            }
        },
    },
}

</script>

<style lang="scss" scoped>
.fade-enter-active {
    animation: bounce-in .5s;
}

.fade-leave-active {
    animation: bounce-in .5s reverse;
}

.collapse-anim {
    animation: bounce-in .5s;
    overflow: hidden;
}

@keyframes bounce-in {
    0% {
        height: 0px;
    }

    100% {
        height: 200px;
    }
}

.collapse-anim-reverse {
    animation: bounce-out .5s;
    overflow: hidden;
}

@keyframes bounce-out {
    0% {
        height: 200px;
    }

    100% {
        height: 0px;
        display: none;
    }
}
</style>
