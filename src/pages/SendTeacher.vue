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

    <div class="modal fade" id="modal-send" tabindex="-1" v-show="show">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-body_icon">
                        <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 0.5C15.8013 0.5 14 2.30129 14 4.5V19.5C14 21.6987 15.8013 23.5 18 23.5H42C44.1987 23.5 46 21.6987 46 19.5V4.5C46 2.30129 44.1987 0.5 42 0.5H18ZM18 2.5H42C43.1253 2.5 44 3.3747 44 4.5V19.5C44 20.6253 43.1253 21.5 42 21.5H18C16.8747 21.5 16 20.6253 16 19.5V4.5C16 3.3747 16.8747 2.5 18 2.5ZM1 5C0.4477 5 0 5.4477 0 6C0 6.5523 0.4477 7 1 7H11C11.5523 7 12 6.5523 12 6C12 5.4477 11.5523 5 11 5H1ZM20.3906 5.48438C20.2 5.50294 20.0187 5.57583 19.8683 5.6944C19.7179 5.81297 19.6048 5.97222 19.5422 6.15323C19.4797 6.33425 19.4705 6.52944 19.5156 6.71555C19.5607 6.90166 19.6584 7.07088 19.7969 7.20313L24.8281 12.2032L19.8281 16.75C19.7306 16.8382 19.6515 16.9448 19.5952 17.0636C19.5389 17.1825 19.5066 17.3112 19.5001 17.4425C19.4936 17.5738 19.513 17.7051 19.5572 17.829C19.6014 17.9528 19.6696 18.0667 19.7578 18.1641C19.846 18.2616 19.9526 18.3407 20.0714 18.397C20.1902 18.4533 20.319 18.4856 20.4503 18.4921C20.5816 18.4987 20.7129 18.4793 20.8367 18.435C20.9605 18.3908 21.0744 18.3226 21.1719 18.2344L26.25 13.6094L27.7656 15.1094C28.9914 16.3256 30.9925 16.3227 32.2187 15.1094L33.7344 13.6094L38.8281 18.2344C38.9256 18.3226 39.0395 18.3908 39.1633 18.435C39.2871 18.4793 39.4184 18.4987 39.5497 18.4921C39.681 18.4856 39.8098 18.4533 39.9286 18.397C40.0474 18.3407 40.154 18.2616 40.2422 18.1641C40.3304 18.0667 40.3986 17.9528 40.4428 17.829C40.487 17.7051 40.5064 17.5738 40.4999 17.4425C40.4934 17.3112 40.4611 17.1825 40.4048 17.0636C40.3485 16.9448 40.2694 16.8382 40.1719 16.75L35.1562 12.1875L40.2031 7.20313C40.2996 7.11152 40.3768 7.00157 40.4303 6.87973C40.4838 6.75789 40.5124 6.62663 40.5145 6.49359C40.5166 6.36055 40.4921 6.22842 40.4425 6.10495C40.3929 5.98149 40.3192 5.86917 40.2256 5.77457C40.1321 5.67996 40.0206 5.60499 39.8977 5.55402C39.7747 5.50305 39.6429 5.4771 39.5099 5.47772C39.3768 5.47835 39.2452 5.5055 39.1228 5.55762C39.0004 5.60974 38.8896 5.68577 38.7969 5.78125L30.7969 13.6875C30.4281 14.0524 29.5387 14.0516 29.1719 13.6875L21.2031 5.78125C21.0985 5.67411 20.9712 5.59182 20.8306 5.54044C20.69 5.48906 20.5396 5.46989 20.3906 5.48438ZM3 11C2.4477 11 2 11.4477 2 12C2 12.5523 2.4477 13 3 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H3ZM5 17C4.4477 17 4 17.4477 4 18C4 18.5523 4.4477 19 5 19H11C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17H5Z"
                                fill="#00AA54"></path>
                        </svg>

                    </div>
                    <div class="modal-body_title green">Спасибо, сообщение отправлено!</div>
                    <div class="modal-body_text">Вы получите ответ от преподавателя по E-mail, и сможете обсудить
                        подробности</div>
                    <div class="modal-form">
                        <a href="#" class="btn-1 min-200">Хорошо</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'result-block',
    data() {

        return {
            userName: '',
            emailUser: '',
            show: true,
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
.modal {
    // display: block;
    // opacity: 1!important;
}
</style>
