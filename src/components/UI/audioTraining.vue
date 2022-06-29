<template>
    <div class="audio-box">
        <div class="audio-box_title">Для полного погружения <b>воспользуйтесь наушниками</b>
        </div>
        <div class="text-center">
            <a href="#" class="btn-audio btn-1 hidden" @click.prevent="changeClass" v-show="!show"><span
                    class="icon-play"></span>Прослушать</a>

            <div class="audio-box-content active" v-show="show">
                <div class="nameFile">Аутогенная тренировка</div>
                <div class="audioplayer" :class="{ 'audioplayer-playing': play }">
                    <audio ref="root" preload="auto" controls="controls"
                        style="width: 0px; height: 0px; visibility: hidden;">
                        <source :src="source">
                    </audio>
                    <div class="audioplayer-playpause" @click.prevent="changeStateMusic"><a href="#"></a></div>
                    <div class="audioplayer-time audioplayer-time-current">{{ currentTime }}</div>
                    <div class="audioplayer-bar" @click="clickProgress" ref="progressbar">
                        <div class="audioplayer-bar-loaded"></div>
                        <div class="audioplayer-bar-played" :style="{ width: currentTime + 'px' }"
                            @click="checkProgressbar"></div>
                    </div>
                    <div class="audioplayer-time audioplayer-time-duration">03:30</div>
                    <div class="audioplayer-volume">
                        <div class="audioplayer-volume-button"><a href="#"></a></div>
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
import { ref } from 'vue';

export default {
    name: 'audio-training',
    data() {
        return {
            play: false,
            show: false,
            currentTime: '0',
        }
    },
    props: {
        modelValue: {
            type: String,
        },
        source: {
            type: String,
            default: "",
        }
    },
    methods: {
        changeClass() {
            this.show = !this.show;
        },

        changeStateMusic() {
            this.play = !this.play;
            this.root.play();
            this.checkProgressbar();
            if (this.play === false) {
                this.root.pause();
            }
        },


        checkProgressbar() {
            let timer = setInterval(() => {
                console.log(this.currentTime = this.root.currentTime);
                if (this.root.currentTime >= this.root.duration) {
                    clearInterval(timer);
                }
            }, 200);
        },


        updateBar(x) {
            let progress = this.progressbar;
            let maxduration = this.root.duration;
            let position = x - progress.offsetLeft;
            console.log(x, progress.offsetLeft, x - progress.offsetLeft)
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.currentTime = percentage + "%";
            this.circleLeft = percentage + "%";
            this.root.currentTime = (maxduration * percentage) / 100;
            this.root.play();
        },


        clickProgress(e) {
            this.root.pause();
            this.updateBar(e.pageX);
        },
    },
    setup() {
        const root = ref(null);
        const progressbar = ref(null);
        return {
            root, progressbar
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
