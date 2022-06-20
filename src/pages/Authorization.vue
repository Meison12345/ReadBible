<template>
    <section class="auth">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title-3">Пожалуйста, авторизуйтесь</div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="profile-form valid-required">
                        <div class="auth-content_title"> Для начала нам потребуются контактные данные:</div>

                        <div class="profile-form-row">
                            <input-wide
                                :title="'Ваш телефон'"
                                :required="true"
                                :deleteButton="true"
                                :classes="'phone-mask'"
                                :flexDirection="'row'"
                                v-model="userPhone"
                            />
                        </div>

                        <div class="profile-form-row">
                            <input-wide
                                :title="'Имя и фамилия'"
                                :maxLength="'50'"
                                :required="true"
                                :deleteButton="true"
                                v-model="userName"
                            />
                        </div>
                        <div class="profile-form-row padding-r">
                            <div class="input-title">Пол</div>

                            <div class="gender-input-radio">
                                <input-radio
                                    :options="[
                                        {name: 'Мужчина', id: 'man', isChecked: false},
                                        {name: 'Женщина', id: 'wooman', isChecked: false},
                                        {name: 'Не указан', id: 'other', isChecked: true}
                                    ]"
                                    :radioName="'gender'"
                                    :flexDirection="'row'"
                                />
                            </div>
                        </div>
                        <div class="profile-form-row">
                            <button-main
                                :text="'Далее'"
                                :disabled="buttonNextDisabled"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {

            return {
                userName: '',
                userPhone: '',
                buttonNextDisabled: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    .auth {
        padding:70px 0 170px;
    }

    .auth-content {
        &_title {
            font-weight: 500;
            font-size: 16px;
            margin:0 0 40px;
        }
    }
    .input-title {
        color: #8CA1AC;
        margin: 5px 0 15px;
    }
    .gender-input-radio {
        margin: 0 0 80px;
    }

    .profile-form {
        max-width: 555px;
    }
    .padding-r {
        padding-left: 65px;
    }

</style>
