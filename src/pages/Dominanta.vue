<template>
    <!--http://localhost:8080/dominanta Страница доминанты -->
    <div class="fullHeight">
        <div class="main-tests">

            <section class="section-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="progress-test">
                                <div class="wrap-chart">
                                    <div class="course-progress_title course-mobile">Курс</div>
                                    <div class="course-progress_name course-mobile">доминанта</div>
                                    <div class="chart" data-percent="13">
                                        <div class="progress-desc">
                                            <div class="progress-title">Пройдено</div>
                                            <div class="progress-percent">13%</div>
                                            <div class="progress-lesson">1 из 8 </div>
                                        </div>


                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30"
                                            class="progress-circular" style="height: 180px; width: inherit;">
                                            <!-- <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="23.529411764705884 23.529411764705884 47.05882352941177 47.05882352941177"
                                                style="transform: rotate(360deg); ">
                                                <circle fill="transparent" cx="47.05882352941177" cy="47.05882352941177"
                                                    r="20" stroke-width="7.058823529411765" stroke-dasharray="125.664"
                                                    stroke-dashoffset="0" class="progress-circular">
                                                </circle>
                                                <circle fill="transparent" cx="47.05882352941177" cy="47.05882352941177"
                                                    r="20" stroke-width="7.058823529411765" stroke-dasharray="125.664"
                                                    stroke-dashoffset="87.96459430051421px" class="v-progress-circular">
                                                </circle>
                                            </svg> -->
                                            <circle-progressbar :stroke-dasharray="'251, 502.4'" class="custom-progbessbar" />
                                            <!-- <div class="v-progress-circular__info"> 30 </div> -->
                                        </div>
                                        <!-- <canvas height="350" width="350" style="height: 175px; width: 175px;"></canvas> -->


                                    </div>
                                </div>
                                <div class="course-progress">
                                    <div class="course-progress_title course-desktop">Курс</div>
                                    <div class="course-progress_name course-desktop">доминанта</div>
                                    <div class="course-progress_lessons">
                                        <div class="count-lesson">
                                            <i>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.91515 9.01666C3.24948 8.67123 2.45455 9.1543 2.45455 9.90427V10.936C2.45455 11.3094 2.66254 11.6516 2.99394 11.8236L8.0394 14.4418C8.32818 14.5917 8.67182 14.5917 8.9606 14.4418L14.0061 11.8236C14.3375 11.6516 14.5455 11.3094 14.5455 10.936V9.90426C14.5455 9.1543 13.7505 8.67122 13.0849 9.01666L8.9606 11.1568C8.67182 11.3067 8.32818 11.3067 8.0394 11.1568L3.91515 9.01666ZM8.96043 0.137254C8.67174 -0.0124854 8.32826 -0.012485 8.03957 0.137254L0.711447 3.93821C-0.00797868 4.31136 -0.00797755 5.34045 0.711448 5.7136L8.03953 9.51454C8.32824 9.66429 8.67175 9.66428 8.96046 9.5145L14.8122 6.47874C15.4779 6.13341 16.2727 6.61649 16.2727 7.3664V10.5322C16.2727 11.0092 16.6594 11.3959 17.1364 11.3959C17.6133 11.3959 18 11.0092 18 10.5322V5.43374C18 5.0603 17.7919 4.71798 17.4604 4.54604L8.96043 0.137254Z"
                                                        fill="#2F3165" fill-opacity="0.4"></path>
                                                </svg>

                                            </i>
                                            <span>8 уроков</span>
                                        </div>
                                        <div class="count-lesson">
                                            <i>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.4 3.33301H0V12.3873C0 13.0987 0.630001 13.6807 1.4 13.6807H11.2V12.3873H1.4V3.33301Z"
                                                        fill="#2F2F66" fill-opacity="0.4"></path>
                                                    <path
                                                        d="M12.6008 0.746094H4.20078C3.43078 0.746094 2.80078 1.32815 2.80078 2.03956V9.80035C2.80078 10.5118 3.43078 11.0938 4.20078 11.0938H12.6008C13.3708 11.0938 14.0008 10.5118 14.0008 9.80035V2.03956C14.0008 1.32815 13.3708 0.746094 12.6008 0.746094ZM12.6008 7.21342L10.8508 6.24332L9.10079 7.21342V2.03956H12.6008V7.21342Z"
                                                        fill="#2F2F66" fill-opacity="0.4"></path>
                                                </svg>

                                            </i>
                                            <span>9 домашних заданий</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div class="lesson-content_title">Как вы читаете. Первое правило быстрого чтения.
                                    </div>
                                    <div class="lesson-content_text">Цель урока - провести анализ количественных и
                                        качественных показателей вашего чтения, а также освоить первое упражнение
                                        техники быстрого чтения.</div>
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
                                                data-target="#lesson-1" aria-expanded="true" aria-controls="lesson-1">
                                                Введение
                                            </div>
                                        </div>
                                        <div id="lesson-1" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#">
                                                            <span class="count-list">1.1</span>
                                                            <span class="lesson-title">Введение к программе освоения
                                                                техники быстрого чтения</span>

                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span class="count-list">1.2</span>
                                                            <span class="lesson-title"> Когда и где используется техника
                                                                быстрого чтения</span>
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
                                    </div>
                                    <div class="lesson-accordion_item">
                                        <div id="head-2">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-2" aria-expanded="true" aria-controls="lesson-2">
                                                Недостатки традиционых методов чтения
                                                <span class="status">
                                                    <span class="process">В процессе</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div id="lesson-2" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-3">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-3" aria-expanded="true" aria-controls="lesson-3">
                                                Как определить скорость своего чтения?

                                            </div>
                                        </div>
                                        <div id="lesson-3" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-4">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-4" aria-expanded="true" aria-controls="lesson-4">
                                                Как определить объем читаемого текста?

                                            </div>
                                        </div>
                                        <div id="lesson-4" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-5">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-5" aria-expanded="true" aria-controls="lesson-5">
                                                Время чтения

                                            </div>
                                        </div>
                                        <div id="lesson-5" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-6">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-6" aria-expanded="true" aria-controls="lesson-6">
                                                Задания
                                            </div>
                                        </div>
                                        <div id="lesson-6" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-7">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-7" aria-expanded="true" aria-controls="lesson-7">
                                                Почему мы читаем с регрессиями
                                            </div>
                                        </div>
                                        <div id="lesson-7" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-8">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-8" aria-expanded="true" aria-controls="lesson-8">
                                                Упражнения
                                            </div>
                                        </div>
                                        <div id="lesson-8" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lesson-accordion_item">
                                        <div id="head-9">
                                            <div class="lesson-accordion_item__head collapsed" data-toggle="collapse"
                                                data-target="#lesson-9" aria-expanded="true" aria-controls="lesson-9">
                                                Домашнее задание
                                            </div>
                                        </div>
                                        <div id="lesson-9" class="collapse" aria-labelledby="head-1"
                                            data-parent="#lesson-accordion">
                                            <div class="lesson-accordion_item__content">
                                                <ul>
                                                    <li class="active">
                                                        <a href="#"><span class="count-list">1.1</span>Введение к
                                                            программе освоения техники быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.2</span>Когда и где
                                                            используется техника быстрого чтения</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.3</span>Что такое быстрое
                                                            чтение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span class="count-list">1.4</span>Пять способов
                                                            чтения</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>



        </div>
    </div>

</template>

<!-- <script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script> -->
<script>

export default {

};
</script>
<style scoped lang="scss">
.chart {
    height: 175px;
    width: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.section-5 {
    padding: 70px 0 150px;

    &.with-toBack {
        padding: 40px 0 150px;
    }
}

.progress-test {
    display: flex;
    align-items: center;
    margin: 0 0 70px;
}

.progress {
    &-desc {
        position: absolute;
        left: 50%;
        top: 50%;
        text-align: center;
        width: 100%;
        transform: translate(-50%, -50%);
    }

    &-title {
        font-size: 12px;
        text-transform: uppercase;
        color: $green-new;
        margin-bottom: 10px;
    }

    &-percent {
        font-weight: bold;
        font-size: 55px;
        line-height: 60px;
        color: $green-new;
    }

    &-lesson {
        font-size: 12px;
        color: $green-new;

    }
}

.wrap-chart {
    display: flex;
    margin: 0 30px 0 0;
}

.chart {
    position: relative;

}

.course-progress {
    &_title {
        font-size: 14px;
        margin: 0 0 9px;
        color: $green-new;
        text-transform: uppercase;
    }

    &_name {
        font-weight: bold;
        font-size: 70px;
        margin: 0 0 20px;
        color: $green-new;
        font-family: $font-2;
    }

    &_lessons {
        display: flex;
    }

    .count-lesson {
        position: relative;
        padding: 0 0 0 25px;
        margin: 0 35px 0 0;

        &:last-child {
            margin: 0;
        }

        i {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
}

.course-mobile {
    display: none;
}

.wrap-lessons {
    padding: 40px 0 0;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    background: #fff;
}

.lessons-bar {
    padding: 18px 25px 20px;
    display: flex;
    max-width: 880px;
    margin: auto;
    justify-content: flex-end;

    &_title {
        margin: auto 40px 0 0;
        font-size: 12px;
        line-height: 128.9%;
        color: rgba(47, 47, 102, 0.4);
        text-transform: lowercase;
    }

    &_list {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 4px;
            background: rgba(192, 199, 214, 0.3);
        }

        li {
            width: 100%;
            text-align: center;
            position: relative;

            a {
                font-weight: bold;
                font-size: 16px;
                display: block;
                padding: 0 0 15px;
                color: rgba(0, 0, 0, 0.2);

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: $green-new;
                    opacity: 0;
                    transition: all 0.3s ease;
                }

                &:hover {
                    color: $green-new;

                    &:before {
                        opacity: 1;
                    }
                }
            }

            &.active {
                a {
                    color: $green-new;

                    &:before {
                        opacity: 1;
                    }
                }
            }
        }
    }
}

.lesson-content {
    padding: 30px 25px 20px;
    background: #FCFCFC;
    max-width: 735px;
    margin: auto;

    &_title {
        font-family: $font-2;
        margin: 0 0 15px;
        font-weight: 500;
        font-size: 27px;
        letter-spacing: -0.03em;
        color: #2F2F66;
    }

    &_text {
        font-size: 15px;
        color: rgba(47, 47, 102, 0.4);
        margin: 0 0 25px;
        font-family: $font-2;
    }

    &_items {
        display: flex;
        flex-wrap: wrap;

        .item {
            margin: 0 50px 15px 0;
            font-size: 12px;
            line-height: 1;
            color: rgba(47, 47, 102, 0.4);

        }
    }

    &_count {
        background: rgba(47, 47, 102, 0.2);
        border-radius: 14px;
        display: inline-flex;
        width: 32px;
        color: #fff;
        justify-content: center;
        align-items: center;
        padding: 6px 5px;
        margin-right: 5px;
    }
}

.lesson-accordion {
    &_item {
        border-bottom: 1px solid #ECEEF3;

        &:last-child {
            border: 0;
        }

        &__head {
            padding: 27px 165px 27px 95px;
            font-size: 15px;
            color: $accent-color;
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 880px;
            margin: auto;

            .status {
                font-size: 14px;
                padding: 0 0 0 15px;
                position: absolute;
                right: 75px;
                top: 50%;
                transform: translateY(-50%);
                font-family: $font-2;
            }

            .process {
                color: $accent-color-new;
            }

            .passed {
                color: $green;
                position: relative;
                padding: 0 0 0 15px;

                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 2px;
                    width: 10px;
                    height: 13px;
                    background: url("../assets/images/svg/status-icon.svg") no-repeat;
                    background-size: 100%;
                }
            }

            &:after {
                content: '';
                position: absolute;
                right: 45px;
                top: 50%;
                width: 14px;
                height: 8px;
                background: url("../assets/images/svg/chevronUp.svg")no-repeat;
                background-size: 100%;
                margin: -4px 0 0;
                transition: all 0.3s ease;
                transform: rotate(180deg);

            }

            &.collapsed {
                &:after {
                    transform: rotate(0deg);
                }

                &:before {
                    background: rgba(47, 47, 102, 0.3);
                }
            }

            &:before {
                content: '';
                position: absolute;
                left: 33px;
                top: 50%;
                width: 12px;
                height: 12px;
                margin: -6px 0 0;
                border-radius: 50%;
                background: #32CD86;
            }
        }

        &__content {
            background: #24CE84;
            padding: 25px 25px 10px;

            ul {
                list-style: none;
                max-width: 880px;
                margin: auto;

                li {
                    position: relative;

                    &:after {
                        content: '';
                        position: absolute;
                        left: 37px;
                        top: 0;
                        width: 1px;
                        height: 100%;
                        background: #fff;
                    }

                    a {
                        font-size: 16px;
                        color: #fff;
                        padding: 0 95px 25px;
                        position: relative;
                        display: inline-block;
                        min-height: 31px;

                        .lesson-title {
                            opacity: 0.6;
                            transition: all 0.3s ease;

                        }
                    }

                    &:hover {
                        a {
                            .lesson-title {
                                opacity: 1;
                            }
                        }
                    }

                    &.active {
                        a {
                            color: #fff;

                            .lesson-title {
                                opacity: 1;
                            }
                        }

                        .count-list {
                            color: $accent-color;
                        }

                        &:first-child {
                            .count-list {
                                background: #fff;
                            }
                        }

                    }

                    &:last-child {
                        &:after {
                            display: none;
                        }
                    }
                }

                .count-list {
                    position: absolute;
                    left: 22px;
                    top: -5px;
                    font-size: 12px;
                    color: #fff;
                    width: 31px;
                    height: 31px;
                    background: #24CE84;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    border: 1px solid #FFFFFF;
                    transition: all 0.3s ease;
                    opacity: 1;
                }
            }
        }
    }
}


//Медиа
@media screen and (max-width: 767px) {
    .lessonTests {
        padding: 55px 0 70px;
    }

    .testText_avtor {
        margin: 0 0 30px;
    }

    .profile {
        text-align: center;
        margin-bottom: 40px;
    }

    .profile-avatar {
        margin: 0 auto 20px;
    }

    .footer_bottom-right {
        justify-content: flex-start;
    }

    .header-NO-registration {
        .header-top-phone {
            display: none;
        }
    }

    .lesson-progress {
        flex-wrap: wrap;

        &_bar {
            order: 0;
            margin: 0 0 25px;
        }

        .btn-1 {
            order: 1;
        }

        .btn-3 {
            order: 2;
        }
    }

    .course-desktop {
        display: none;
    }

    .course-mobile {
        display: block;
    }

    .progress-test {
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        margin: 0 0 40px;
    }

    .wrap-chart {
        margin: 0 0 35px;
        flex-direction: column;
        text-align: center;
    }

    .section-5 {
        padding: 30px 0 100px;
    }

    .wrap-lessons {
        margin: 0 -15px;
    }

    .lessons-bar {
        flex-direction: column;
        padding: 18px 0 0 20px;

        &_title {
            margin: 0 0 15px;
        }

        &_list {
            justify-content: flex-start;
            overflow-x: auto;

            li {
                min-width: 62px;
            }
        }
    }

    .lesson-accordion {
        &_item {
            &__head {
                padding: 27px 35px 27px 55px;

                &:before {
                    left: 15px;
                }

                &:after {
                    right: 15px;
                }

                .status {
                    top: inherit;
                    bottom: 0px;
                    left: 40px;
                    right: inherit;
                }
            }
        }
    }

    .lesson-accordion_item__content ul li a {
        padding: 0 30px 25px 75px;
    }

    .lesson-content {
        padding: 20px 15px 30px;

        &:before {
            display: none;
        }
    }

    .lessonTests .linkBack {
        margin: 0 0 40px 0;
    }

    .header-top-mobile {
        display: block;

        .rules-link {
            margin: 0;
        }
    }
}

@media screen and (max-width: 575px) {
    .lesson-accordion_item__content ul .count-list {
        left: 0;
    }

    .lesson-accordion_item__content ul li:after {
        left: 15px;
    }

    .lesson-accordion_item__content ul li a {
        padding: 0 30px 25px 45px;
    }

    .lesson-accordion_item__head {
        padding: 27px 35px 27px 50px;
    }


    .course-progress_name {
        font-size: 40px;
    }

    .course-progress {
        &_lessons {
            flex-wrap: wrap;
        }

        .count-lesson {
            margin: 0 20px 10px 0;
        }
    }
}
</style>
