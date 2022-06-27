<!--Textarea на странице "Написать преподавателю" -->
<template>
    <span>{{ helpmin }}{{ min }}</span>
    <span>:</span>
    <span>{{ helpsec }}{{ sec }}</span>
</template>

<script>
export default {
    name: 'time-watcher',
    data() {
        return {
            helpsec: 0,
            helpmin: 0,
            min: 0,
            sec: 0,
        }
    },
    props: {
        modelValue: {
            type: String,
        },
    },
    mounted() {
        setInterval(() => {
            this.sec += 1;
            if (this.sec > 9) {
                this.helpsec = '';
            }else{
                this.helpsec = 0
            }
            if (this.sec == 60) {
                this.sec = 0;
                this.min++;
                if (this.min > 9) {
                    this.helpmin = '';
                }
            }
        }, 1000);

    },

}
</script>

<style lang="scss" scoped>
</style>
