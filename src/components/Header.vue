<template>
    <header class="bg-white header-registration">
        <div class="header-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-5">
                        <div class="logo">
                            <a href="/" class="logo-img">
                                <img src="../assets/images/svg/logo-new.svg" alt="Школа Андреева">
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-7  col-7 align-items-center">
                        <div class="header-top_box">
                            <div class="header-top_right">
                                <a href="#" class="rules-link">Правила занятий</a>
                                <div class="login registration">
                                    <a href="#">
                                        <i class="icon-login">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.13672 0.370239C4.00339 0.370239 0.636719 3.73691 0.636719 7.87024C0.636719 12.0036 4.00339 15.3702 8.13672 15.3702C12.2701 15.3702 15.6367 12.0036 15.6367 7.87024C15.6367 3.73691 12.2701 0.370239 8.13672 0.370239ZM4.30339 13.2036C4.30339 13.1869 4.30339 13.1869 4.30339 13.1702C4.30339 11.0369 6.03672 9.30357 8.15339 9.30357C10.2867 9.30357 12.0034 11.0369 12.0201 13.1536C10.9367 13.9536 9.58672 14.4369 8.13672 14.4369C6.70339 14.4536 5.37005 13.9869 4.30339 13.2036ZM8.15339 8.03691C7.25339 8.03691 6.53672 7.30357 6.53672 6.42024C6.53672 5.52024 7.27005 4.80357 8.15339 4.80357C9.05339 4.80357 9.77005 5.53691 9.77005 6.42024C9.78672 7.32024 9.05339 8.03691 8.15339 8.03691ZM12.8701 12.4202C12.5867 10.5869 11.2367 9.08691 9.48672 8.58691C10.2034 8.13691 10.7034 7.33691 10.7034 6.42024C10.7034 5.02024 9.57005 3.88691 8.17005 3.88691C6.77005 3.88691 5.63672 5.02024 5.63672 6.42024C5.63672 7.33691 6.12005 8.13691 6.85339 8.58691C5.08672 9.10357 3.73672 10.6202 3.47005 12.4702C2.30339 11.2869 1.58672 9.65357 1.58672 7.87024C1.58672 4.23691 4.53672 1.28691 8.17005 1.28691C11.8034 1.28691 14.7534 4.23691 14.7534 7.87024C14.7034 9.63691 14.0034 11.2369 12.8701 12.4202Z" />
                                            </svg>
                                        </i>
                                        <span>Личный кабинет</span>
                                    </a>
                                    <div class="login-menu">
                                        <ul>
                                            <li><a href="#">Настройки</a></li>
                                            <li><a href="#">Выйти</a></li>
                                        </ul>
                                        <div class="login-menu-footer">
                                            <a href="#">О школе</a>
                                            <a href="#">Пройти тест</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-mob-menu" @click="changeMobileMenu">
                                <a href="#" class="toggle-menu" :class="{ on: mobileBlock }"><span></span></a>
                            </div>
                            <div class="menu">
                                <ul>
                                    <li><a href="#">Уроки</a></li>
                                    <li><a href="#">Упражнения</a></li>
                                    <li><a href="#">Написать преподавателю</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--mobile-menu-------------------------------------->
            <transition name="fade">
                <div class="mobile-menu" v-show="mobileBlock">
                    <ul>
                        <li class="active"><a href="#">Уроки</a></li>
                        <li><a href="#">Упражнения</a></li>
                        <li><a href="#">Написать преподавателю</a></li>
                    </ul>
                    <div class="mobile-bg">
                        <div class="header-top-mobile">
                            <a href="#" class="rules-link">Правила занятий</a>
                        </div>
                        <div class="wrap-mobile-menu-footer">
                            <div class="mobile-menu-footer">
                                <a href="#">Договор оферты</a>
                                <a href="#">Политика конфиденциальности</a>
                                <div class="header-top-phone">
                                    <i class="icon-phone">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.9759 10.8866V12.6218C12.9765 12.7829 12.9422 12.9424 12.875 13.09C12.8078 13.2376 12.7093 13.3701 12.5857 13.479C12.4621 13.5879 12.3162 13.6708 12.1574 13.7224C11.9985 13.774 11.8302 13.7931 11.6631 13.7786C9.81019 13.5852 8.0303 12.9771 6.46649 12.0029C5.01157 11.1149 3.77804 9.93002 2.85352 8.53249C1.83586 7.02354 1.20254 5.30555 1.00489 3.5177C0.98984 3.35775 1.00963 3.19654 1.063 3.04434C1.11636 2.89214 1.20214 2.75229 1.31486 2.63367C1.42758 2.51506 1.56478 2.42029 1.71772 2.3554C1.87066 2.29051 2.03599 2.25692 2.20319 2.25677H4.00967C4.30191 2.25401 4.58521 2.35341 4.80679 2.53645C5.02837 2.71949 5.17309 2.97368 5.214 3.25163C5.29024 3.80694 5.43165 4.35218 5.63551 4.87696C5.71653 5.08398 5.73406 5.30898 5.68603 5.52528C5.63801 5.74159 5.52643 5.94013 5.36454 6.0974L4.59979 6.83197C5.457 8.28004 6.70522 9.47902 8.21276 10.3024L8.9775 9.56784C9.14122 9.41233 9.34793 9.30516 9.57311 9.25902C9.7983 9.21289 10.0325 9.22974 10.2481 9.30756C10.7944 9.50338 11.362 9.6392 11.9401 9.71244C12.2326 9.75208 12.4998 9.8936 12.6908 10.1101C12.8817 10.3266 12.9832 10.6029 12.9759 10.8866Z"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.47172 1.37028C12.7946 1.37028 15.4883 4.06398 15.4883 7.38684"
                                                stroke-linecap="round" />
                                            <path d="M9.39396 4.14555C11.0986 4.14555 12.4805 5.52742 12.4805 7.23206"
                                                stroke-linecap="round" />
                                        </svg>
                                    </i>
                                    <span>8-800-707-27-28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <!-- end mobile-menu-------------------------------------->
        </div>

    </header>
</template>

<script>
export default {
    data() {
        return {
            mobileBlock: false,
        }
    },
    methods: {
        changeMobileMenu() {
            this.mobileBlock = !this.mobileBlock
        }
    }
}
</script>

<style scoped lang="scss">
.fade-enter-active {
    animation: bounce-in .5s;
}

.fade-leave-active {
    animation: bounce-in .5s reverse;
}

@media (min-width:993px) {
    @keyframes bounce-in {
        0% {
            height: 0px;
        }

        100% {
            height: 245px;
        }
    }
}

@media (max-width:992px) {
    @keyframes bounce-in {
        0% {
            height: 0px;
        }

        100% {
            height: 273px;
        }
    }
}

@media (max-width:768px) {
    @keyframes bounce-in {
        0% {
            height: 0px;
        }

        100% {
            height: 350px;
        }
    }
}

@media (max-width:350px) {
    @keyframes bounce-in {
        0% {
            height: 0px;
        }

        100% {
            height: 379px;
        }
    }
}
</style>
