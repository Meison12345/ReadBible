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
    // .submit-2 {
    //     display: inline-block;
    //     font-weight: bold;
    //     border: 0;
    //     font-size: 25px;
    //     line-height: 1;
    //     text-align: center;
    //     text-transform: uppercase;
    //     color: #fff;
    //     background: $green-new;
    //     box-shadow: 0 12.56px 18.84px rgba(91, 91, 91, 0.12);
    //     border-radius: 68px;
    //     padding:22px 50px 18px;
    //     transition: all 0.3s ease ;
    //     &:disabled {
    //         background: #E0E0E0;
    //         color: #949494;
    //         box-shadow: none;
    //         &:hover {
    //         background: #E0E0E0;
    //         }
    //     }
    //     &:hover {
    //         background: $hover-color;
    //     }
    // }
</style>
