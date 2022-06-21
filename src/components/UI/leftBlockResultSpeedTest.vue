<template>
    <div class="col-lg-6 col-md-8">
        <div class="result-test">
            <div class="result-test_title">Вы читаете со скоростью <b>{{ text }}</b><b>знаков в минуту</b></div>
            <div class="result-test_speed">Время, которое вы затратили на чтение <b><span>{{ minute }}</span> минут
                    <span>{{ second }}</span> секунд</b></div>
            <div class="result-test_coefficient">Коэффициент понимания текста — <span>{{ koef }}</span></div>
            <div class="coefficient-info">
                <div class="coefficient-info_title">Использована классическая формула:</div>
                <div class="coefficient-info_text">(Кол-во знаков/время чтения) * коэффициент понимания </div>
            </div>
        </div>
        <div class="result-info">
            <div class="result-info_title">Это хорошая скорость</div>
            <div class="result-info_text">Вы читаете быстрее большинства людей, хотя 15% прошли тест ещё лучше.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'result-block',
    props: {
        modelValue: {
            type: String,
        },
        text: {
            type: Number,
            default: 0,
        },
        minute: {
            type: Number,
            default: 0,
        }, second: {
            type: Number,
            default: 0,
        },
        koef: {
            type: Number,
            default: 0.1,
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
