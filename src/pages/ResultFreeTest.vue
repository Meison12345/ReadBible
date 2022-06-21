<template>
    <div class="main-tests">

        <section class="result-content">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <a href="#" class="linkBack">
                            <i>
                                <svg width="6" height="14" viewBox="0 0 10 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </i>
                            Назад к оглавлению
                        </a>
                    </div>
                </div>
                <div class="row">
                    <!-- <div class="col-lg-6 col-md-8">
                        <div class="result-test">
                            <div class="result-test_title">Вы читаете со скоростью <b>1489 знаков в минуту</b></div>
                            <div class="result-test_speed">Время, которое вы затратили на чтение <b><span>18</span>
                                    минут <span>23</span> секунд</b></div>
                            <div class="result-test_coefficient">Коэффициент понимания текста — <span>0,1</span></div>

                            <div class="coefficient-info">
                                <div class="coefficient-info_title">Использована классическая формула:</div>
                                <div class="coefficient-info_text">(Кол-во знаков/время чтения) * коэффициент понимания
                                </div>
                            </div>
                        </div>
                        <div class="result-info">
                            <div class="result-info_title">Это хорошая скорость</div>
                            <div class="result-info_text">Вы читаете быстрее большинства людей, хотя 15% прошли тест ещё
                                лучше.</div>
                        </div>
                    </div> -->


                    <result-block :text="2000" :minute="24" :second="37" :koef="0.2" />


                    <div class="col-lg-6 col-md-4">
                        <div class="record">
                            <p>Люди, освоившие технику быстрого чтения, могут прочитать этот текст буквально за
                                несколько секунд. А рекорд, зафиксированный в книге рекордов Гиннеса — <b>60 000 знаков
                                    в минуту.</b></p>
                            <br>
                            <div class="record_name">Этот рекорд принадлежит ученице нашей школы Анне Ивановне</div>
                            <img src="../assets/images/record-img.png" class="record_img"
                                alt="Фотография нашей ученицы Анны Ивановны">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="try-step">
            <div class="container-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="title-2">А что теперь?</div>
                            <div class="try-step_text">
                                Пройдите курс «Доминанта» через интернет, чтобы <b>увеличить скорость чтения в 5-12
                                    раз.</b> Усилив внимание, расширив угол зрения и освоив специальные аутотреннинговые
                                методики, вы сможете обучиться ещё более быстрому чтению по нашим продвинутым методикам.
                            </div>
                            <div>
                                <!-- <a href="#" class="btn-1">Попробовать онлайн-курс</a> -->
                                <link-main :href="'#'" :text="'Попробовать онлайн-курс'" class="btn-1" />
                            </div>
                            <div>
                                <a href="/" class="linkBack">
                                    <i>
                                        <svg width="6" height="14" viewBox="0 0 10 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </i>
                                    Вернуться на главную страницу
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
</style>
