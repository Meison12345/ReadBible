<!--Отрисовка блока уроков -->
<template>


    <div v-for="lesson in mas" :key="lesson.title" class="lesson-accordion_item">
        <div>
            <div class="lesson-accordion_item__head collapsed" @click="openDetails($event)">
                {{ lesson.title }}
            </div>
        </div>
        <div v-show="show">
            <div class="lesson-accordion_item__content">
                <ul>
                    <li class="active" v-for="el in lesson" :key="el">
                        <a href="#">
                            <span class="count-list">{{1.1}}</span>{{ el }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- <input-radio :options="[
        { name: 'Введение', id: 'man', isChecked: false },
        { name: 'Женщина', id: 'wooman', isChecked: false },
        { name: 'Не указан', id: 'other', isChecked: true }
    ]" :radioName="'gender'" :flexDirection="'row'" /> -->
</template>

<script>
export default {
    name: 'lessons-block',
    data() {
        return {
            currentLessons: this.lessons,
            mas: [],
            show: false,
        }
    },
    props: {
        modelValue: {
            type: String
        },
        lessons: {
            type: Object,
        }
    },
    methods: {
        async getData(link) {
            let data = await fetch(link);
            this.mas = await data.json();
        },
        openDetails(event) {
            console.clear();
            const currentTarget = event.target.parentNode.parentNode.children[1].style.display;
            // this.show = !this.show;
            console.log(event.target.parentNode.parentNode.children[1]);
            if (currentTarget === 'none') {
                event.target.parentNode.parentNode.children[1].style.display = 'block';
            } else {
                event.target.parentNode.parentNode.children[1].style.display = 'none';
            }
        }
    },
    mounted() {
        this.getData(this.lessons);
    },
}

</script>

<style lang="scss" scoped>
</style>
