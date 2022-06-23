<template>
    <div class="wrap-input deleteValue" @click="inputClick">
        <label>
            <input type="text" required="" :class="'input ' + classes" :maxlength="maxLength" @focus="isFocused = true"
                @blur="isFocused = false" @input="changeValue" v-model="inputValue">
            <div class="label">{{ title }}<span v-if="required"> *</span></div>
            <span class="deleteValue-icon active" v-if="deleteButton && (inputValue ?? '') != ''"
                @click="clearInput"></span>
        </label>
    </div>
</template>

<script>
import Inputmask from 'inputmask';
export default {
    name: 'input-wide',
    props: {
        modelValue: {
            type: String
        },
        title: {
            type: String,
            default: ''
        },
        classes: {
            type: String,
            default: ''
        },
        maxLength: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        deleteButton: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        changeValue(event) {
            this.$emit('update:modelValue', event.currentTarget.value);
        },
        clearInput() {
            setTimeout(() => {
                this.$el.querySelector('input').blur();
            }, 100)
            this.inputValue = '';
        },
    },
    data() {
        return {
            isFocused: false,
            inputValue: ''
        }
    },
    watch: {
        'isFocused': function (value) {
            if (value)
                this.$el.querySelector('div.label').classList.add('active');
            else if (!value && this.inputValue == '')
                this.$el.querySelector('div.label').classList.remove('active');
        }
    },
    mounted() {
        const phoneMask = new Inputmask('+7 (999) 999-99-99', {
            placeholder: '_',
            showMaskOnHover: false,
            showMaskOnFocus: false
        });
        phoneMask.mask('.phone-mask');
    },
}
</script>

<style lang="scss" scoped>
// .wrap-input {
//     background: #FFFFFF;
//     border-radius: 70px;
//     position: relative;
//     margin:0 0 35px;
//     font-family: $font-2;
//     .info-sms{
//         font-weight: 500;
//         font-size: 10px;
//         position: absolute;
//         right: 20px;
//         top:50%;
//         transform: translateY(-50%);
//     }
//     .wait-sms {
//         color: #EB5757;
//     }
//     .confirmed-sms {
//         color: #72C42C;
//     }
//     label {
//         cursor: pointer;
//         display: block;
//         font-weight: 400;
//     }
//     input {
//         width:100%;
//         border: 0;
//         background: transparent;
//         font-weight: 500;
//         font-size: 35px;
//         letter-spacing: -0.03em;
//         color: $accent-color-new;
//         padding: 37px 68px 28px;
//     }
//     .label {
//         position: absolute;
//         top:50%;
//         transform: translateY(-50%);
//         transition: all 0.3s ease;
//         left: 68px;
//         font-size: 25px;
//         line-height: 19px;

//         color: rgba(47, 47, 102, 0.4);

//         span {
//         color: #EB5757;
//         }
//         &.active {
//         top:12px;
//         transform: translateY(0);
//         font-size: 15px;
//         color: #C0C7D6;
//         }
//     }
//     &.dataInput {
//         max-width: 390px;
//         input {
//             padding-right: 45px;
//         }
//         &:after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             right: 42px;
//             width: 40px;
//             height: 40px;
//             mask-image: url("../../assets/images/svg/calendar-icon.svg");
//             mask-repeat: no-repeat;
//             background: $green;
//             transform: translateY(-50%);
//             mask-size: 100%;
//         }
//     }
// }
// .deleteValue {
//     &-icon {
//         position: absolute;
//         right: 40px;
//         top: 50%;
//         width: 23px;
//         height: 23px;
//         transform: translateY(-50%);
//         mask-image: url("../../assets/images/svg/del-icon.svg");
//         mask-size: 100%;
//         background: $accent-color-new;
//         display: none;
//         &.active {
//         display: block;
//         }
//     }
// }
</style>
