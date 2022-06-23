<template>
    <div class="wrap-profile">
        <div class="container">
            <div class="container-2 ">
                <div class="row">
                    <div class="col-12">
                        <div class="title-3">Написать преподавателю</div>
                        <div class="profile-title">Если у Вас возникли вопросы в процессе освоения программы, вы можете
                            задать их преподавателю, заполнив форму отправки. Ответ вы получите на указанный почтовый
                            адрес.</div>

                        <form action="#">
                            <div class="profile-form valid-required">
                                <div class="profile-form-row">
                                    <div class="wrap-input deleteValue">
                                        <input-wide :title="'Имя и фамилия'" :maxLength="'50'" :required="true"
                                            :deleteButton="true" v-model="userName" />
                                    </div>
                                </div>

                                <div class="profile-form-row">
                                    <div class="wrap-input  deleteValue">
                                        <input-wide :title="'Email'" :maxLength="'50'" :required="true"
                                            :deleteButton="true" v-model="emailUser" />
                                    </div>
                                </div>
                                <div class="profile-form-row">
                                    <div class="wrap-textarea-2">
                                        <text-field />
                                    </div>
                                </div>

                                <div class="profile-form-row">
                                    <link-main class="btn-1" @click.prevent="checkForm" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="modal-win-send-message">
        <div class="modal-win-send-message-wrapper">
            <img src="" alt="">
            <p>Спасибо, сообщение отправлено!</p>
            <p>Вы получите ответ от преподавателя по E-mail, и сможете обсудить подробности</p>
            <button>Хорошо</button>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'result-block',
    data() {

        return {
            userName: '',
            emailUser: '',
        }
    },
    methods: {
        checkForm: function () {
            const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gmi;
            console.log(this.userName.trim());
            if (regEmail.test(this.emailUser) && this.userName.trim().length > 2) {
                console.log('Всё верно');
            }

        },
    },
    props: {
        modelValue: {
            type: String,
        },
        text: {
            type: Number,
            default: 0,
        },
        minute: {
            type: Number,
            default: 0,
        }, second: {
            type: Number,
            default: 0,
        },
        koef: {
            type: Number,
            default: 0.1,
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
