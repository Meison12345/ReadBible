<template>
    <div class="answers-box_row">
        <div class="answers-box_title">В какой период собирают зверобой?
            <span class="number-row">10</span>
        </div>
        <label class="radio-input ">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">Летнего солнцестояния </span>
        </label>
        <label class="radio-input ">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">Созревания плодов </span>
        </label>
        <label class="radio-input">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">Цветения День</span>
        </label>
        <label class="radio-input">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">Ивана-Купала </span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'question-answer',
    props: {
        modelValue: {
            type: String
        },
    },
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
