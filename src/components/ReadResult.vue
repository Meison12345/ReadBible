<template>
    <div class="lessonTests">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a href="#" class="linkBack">
                        <i>
                            <svg width="8" height="16" viewBox="0 0 10 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </i>
                        К оглавлению
                    </a>
                </div>
                <div class="col-12">
                    <div class="wrapTest">
                        <div class="result-test">
                            <div class="result-test_title">Вы читаете со скоростью <b>{{ speedValue }}</b> <span
                                    class="result-test_status">До обучения</span></div>

                            <div class="explanations">
                                <div class="explanations_title">Пояснения к тесту:</div>
                                <div class="explanations_row"><span>100 баллов</span> — опытный пользователь</div>
                                <div class="explanations_row"><span>70-80 баллов</span> — обученный навыкам быстрого
                                    чтения</div>
                                <div class="explanations_row"><span>40-50 баллов</span> — эрудированный, но не обученный
                                    бытсрому чтению</div>
                                <div class="explanations_row"><span>20-30 баллов</span> — результат большинства
                                    читателей</div>
                            </div>
                        </div>
                        <div class="result-info">
                            <div class="result-info_title">Запомните результат этого теста </div>
                            <div class="result-info_text">Внутри последующих уроков вы будете снова проверять скорость
                                чтения, используя такой же тест.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="text-right">
                        <link-main class="btn-1" text="Продолжить занятия" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        speedValue: String,
    }
}
</script>


<style scoped lang="scss">
</style>
