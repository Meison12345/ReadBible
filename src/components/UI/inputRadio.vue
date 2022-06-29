<template>
    <div :class="'radio-' + flexDirection">
        <label class="radio-input gender-radio" v-for="option in options" :key="option.id"
            @change="changeOption(option.id)">
            <input type="radio" :name="radioName" :id="option.id" :value="option.id" v-if="option.isChecked" checked>
            <input type="radio" :name="radioName" :id="option.id" :value="option.id" v-else>
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
</style>
