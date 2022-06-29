<template>
    <div class="lessonTests">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a href="#" class="linkBack">
                        <i>
                            <svg width="8" height="16" viewBox="0 0 10 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </i>
                        Вернуться к чтению текста
                    </a>
                </div>
                <div class="col-12">
                    <div class="wrapTest transparent-bg">
                        <div class="title-2">Вопросы по тексту</div>

                        <div class="answers-box">
                            <form action="#">

                                <question-answer question="В какой период собирают зверобой?" correctAnswer="2" />

                                <div class="answers-box_row">
                                    <!-- <input type="submit" class="btn-1" value="Отправить ответы"> -->
                                    <link-main class="btn-1" text="Отправить ответы" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
</style>
