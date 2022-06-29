<template>
    <!--http://localhost:8080/dominanta Страница доминанты -->
    <div class="main-tests">

        <section class="section-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="progress-test">
                            <circle-progressbar :maxLesson="11" :nowLesson="7" :courseName="'Доминанта'"
                                :countHomework="12" class="custom-progbessbar" />
                        </div>
                    </div>

                    <lessons-block />

                </div>
            </div>

        </section>



    </div>
</template>

<style scoped lang="scss">
</style>
