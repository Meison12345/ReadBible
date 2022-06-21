<!--Кнопка на главной странице в таблице -->
<template>
    <button type="submit" name="ms2_action" value="cart/add">{{ text }}</button>
</template>

<script>
export default {
    name: 'button-price',
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
