<template>
    <a :href="link">{{ text }}</a>
</template>

<script>
export default {
    name: 'link-main',
    props: {
        modelValue: {
            type: String
        },
        text: {
            type: String,
            default: 'Кнопка'
        },
        link: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
