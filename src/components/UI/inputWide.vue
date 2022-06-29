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
</style>
