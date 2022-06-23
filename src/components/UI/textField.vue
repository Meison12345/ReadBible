<!--Textarea на странице "Написать преподавателю" -->
<template>
    <div class="wrap-input">
        <textarea class="input" placeholder="Введите своё сообщение"></textarea>
    </div>
</template>

<script>
export default {
    name: 'text-field',
    props: {
        modelValue: {
            type: String
        },
        text: {
            type: String,
            default: 'Кнопка'
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
