<template>
    <input type="submit" class="submit submit-2" :value="text" :disabled="disabled">
</template>

<script>
export default {
    name: 'button-main',
    props: {
        modelValue: {
            type: String
        },
        text: {
            type: String,
            default: 'Кнопка'
        },
        disabled: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
