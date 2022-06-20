<template>
    <div :class="'radio-' + flexDirection">
        <label
            class="radio-input gender-radio"
            v-for="option in options"
            :key="option.id"
            @change="changeOption(option.id)"
        >
            <input
                type="radio"
                :name="radioName"
                :id="option.id"
                :value="option.id"
                v-if="option.isChecked"
                checked
            >
            <input
                type="radio"
                :name="radioName"
                :id="option.id"
                :value="option.id"
                v-else
            >
            <span class="radio-icon"></span>
            <span class="radio-text man-icon icons">{{ option.name }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'input-radio',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            },
            radioName: {
                type: String,
                required: true
            },
            flexDirection: {
                type: String,
                required: true,
                default: 'row'
            }
        },

        methods: {
            changeOption(value) {
                this.$emit('update:modelValue', value);
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .radio-row {
        display: flex;
        flex-wrap: wrap;
    }
    .radio-column {
        display: flex;
        flex-direction: column;
    }

    .radio-input {
        position: relative;
        cursor: pointer;
        border-radius: 5px;
        user-select: none;
        font-weight: 400;
        padding:8px 0 8px 60px;
        margin:0 15px 0 0;
        display: flex;
        align-items: center;
        font-size: 15px;
        color: $text-color;
        min-height: 50px;

        input[type='radio'] {
            display: none;
            &:checked {
                & ~ .radio-icon:before {
                    opacity: 1;
                }
            }
        }
        .radio-icon {
            left:0;
            &:before {
            opacity:0;
            background: $accent-color-new;
            }
        }
        &:hover {
            .radio-icon {
                border-color: $accent-color;
                &:before {
                    opacity:1;
                }
            }
        }
        &.true {
            background: rgba(111, 207, 151, 0.2);
        }
        &.false {
            background: rgba(235, 87, 87, 0.2);
        }
        }

        .radio-icon {
        position: absolute;
        left:40px;
        top:50%;
        transform: translateY(-50%);
        width: 44px;
        height: 44px;

        border-radius: 50%;
        background: #FFFFFF;
        border: 0;
        transition: all 0.3s ease;
        &:before {
            opacity:0;
            content: '';
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            background: transparent;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
    }

    .radio-text {
        transition: all 0.3s ease;
    }
</style>
