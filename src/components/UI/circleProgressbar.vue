<!--Круговой прогрессбар на странице курса -->
<template>
    <svg viewbox="0 0 200 200">

        <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="#ccc" stroke-dasharray="502,4 502,4"
            stroke-linecap="round">
        </circle>



        <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="#32CD86" stroke-linecap="round"
            stroke-dashoffset="0" :stroke-dasharray="'strokeDasharray'">
        </circle>



        <!-- <text x="100" y="125" font-family="Arial" font-size="70" text-anchor="middle" fill="#444">
            1
        </text> -->
    </svg>
</template>

<script>
export default {
    name: 'circle-progressbar',
    props: {
        modelValue: {
            type: String
        },
        strokeDasharray: {
            type: String,
            default: '0, 502.4'
        },
    },
    methods: {
        checkPersent() {

        }
    }
}
</script>

<style lang="scss" scoped>
</style>
