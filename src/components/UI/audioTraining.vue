<template>
    <div class="audio-box">
        <div class="audio-box_title">Для полного погружения <b>воспользуйтесь наушниками</b>
        </div>
        <div class="text-center">
            <a href="#" class="btn-audio btn-1 hidden" @click="changeClass" v-show="!show"><span
                    class="icon-play"></span>Прослушать</a>

            <div class="audio-box-content active" v-show="show">
                <div class="nameFile" :class="{ 'audioplayer-playing': play }">Аутогенная тренировка</div>
                <div class="audioplayer">
                    <audio preload="auto" controls="" style="width: 0px; height: 0px; visibility: hidden;">
                        <!-- <source src="audio/Tones and I - Dance Monkey_(mp3mob.net).mp3"> -->
                        <source :src="source" type="audio/mpeg">
                    </audio>
                    <div class="audioplayer-playpause" title=""><a href="#" @click.prevent="changeStateMusic"></a></div>
                    <div class="audioplayer-time audioplayer-time-current">00:00</div>
                    <div class="audioplayer-bar">
                        <div class="audioplayer-bar-loaded"></div>
                        <div class="audioplayer-bar-played"></div>
                    </div>
                    <div class="audioplayer-time audioplayer-time-duration">03:30</div>
                    <div class="audioplayer-volume">
                        <div class="audioplayer-volume-button" title=""><a href="#"></a></div>
                        <div class="audioplayer-volume-adjust">
                            <div>
                                <div style="width: 100%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="text-center"><a href="#" class="btn-2">Пропустить</a></div>
    </div>
</template>

<script>
export default {
    name: 'audio-training',
    data() {
        return {
            show: false,
            play: false,
        }
    },
    props: {
        modelValue: {
            type: String
        },
        source: {
            type: String,
            default: "audio/Tones and I - Dance Monkey_(mp3mob.net).mp3"
        }
    },
    methods: {
        changeClass(e) {
            e.preventDefault();
            console.log(1);
            this.show = !this.show;
        },

        changeStateMusic() {
            this.play = !this.play;
            console.log(this.play);
            document.querySelector('audio').play()
        },
        createMusic() {
            let promise = document.querySelector('audio').play();
            if (promise !== undefined) {
                promise.then(_ => {
                    console.log(_);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    },
    mounted() {
        this.createMusic();
    }
}
</script>

<style lang="scss" scoped>
</style>
