<!--Чекбоксы(Помните наши рекомендации) перед началом занятия -->
<template >
    <div class="checkbox-list">
        <label class="checkbox">
            <input type="checkbox" v-model="selected" value="1"><span class="checkbox-icon"></span><span
                class="checkbox-label">На
                рабочем месте
                наведён порядок</span></label>
        <label class="checkbox">
            <input type="checkbox" v-model="selected" value="2"><span class="checkbox-icon"></span><span
                class="checkbox-label">Стол хорошо и ровно
                освещён</span></label>
        <label class="checkbox">
            <input type="checkbox" v-model="selected" value="3"><span class="checkbox-icon"></span><span
                class="checkbox-label">Телефон отложен или
                выключен</span></label>
        <label class="checkbox">
            <input type="checkbox" v-model="selected" value="4"><span class="checkbox-icon"></span><span
                class="checkbox-label">Мессенджеры и другие
                уведомления отключены</span></label>
    </div>
    <button-main class="custom-btn" :disabled="selected.length !== 4" :text="'начать занятие'" />
</template>

<script>
export default {
    name: 'checkbox-rules',
    data() {
        return {
            selected: [],
        }
    },
    props: {
        modelValue: {
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.custom-btn {
    margin: 0 auto;
    display: block;
}
</style>
