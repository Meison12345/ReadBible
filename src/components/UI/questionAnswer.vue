<template>
    <div class="answers-box_row">
        <div class="answers-box_title">{{ question }}
            <span class="number-row">10</span>
        </div>
        <label class="radio-input ">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">Летнего солнцестояния </span>
        </label>

        <label class="radio-input" v-for="el in obj" :key="el">
            <input type="radio" name="answers-10">
            <span class="radio-icon"></span>
            <span class="radio-text">{{ el }}</span>
        </label>


        <!-- <label class="radio-input ">
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
        </label> -->
    </div>
</template>

<script>
export default {
    name: 'question-answer',
    props: {
        modelValue: {
            type: String
        },
        question: {
            type: String,
        },
        correctAnswer: {
            type: String,
        }
    },
    data() {
        return {
            obj: {
                a: '123123',
                b: '1231231214'
            }
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
