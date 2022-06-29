<!--Круговой прогрессбар на странице курса -->
<template>

    <div class="wrap-chart">
        <div class="course-progress_title course-mobile">Курс</div>
        <div class="course-progress_name course-mobile">{{ courseName }}</div>

        <div class="chart">
            <div class="progress-desc">
                <div class="progress-title">Пройдено</div>
                <div class="progress-percent">{{ nowPersent }}</div>
                <div class="progress-lesson">{{ nowLesson }} из {{ maxLesson }} </div>
            </div>

            <svg viewbox="0 0 200 200" class="custom-progressbar-circle">

                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="#ccc"
                    stroke-dasharray="502.4 502" stroke-linecap="round">
                </circle>

                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="#32CD86" stroke-linecap="round"
                    stroke-dashoffset="0" :stroke-dasharray="strokeDasharrayValue">
                </circle>
            </svg>
        </div>
    </div>

    <div class="course-progress">
        <div class="course-progress_title course-desktop">Курс</div>
        <div class="course-progress_name course-desktop">{{ courseName }}</div>
        <div class="course-progress_lessons">
            <div class="count-lesson">
                <i>
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.91515 9.01666C3.24948 8.67123 2.45455 9.1543 2.45455 9.90427V10.936C2.45455 11.3094 2.66254 11.6516 2.99394 11.8236L8.0394 14.4418C8.32818 14.5917 8.67182 14.5917 8.9606 14.4418L14.0061 11.8236C14.3375 11.6516 14.5455 11.3094 14.5455 10.936V9.90426C14.5455 9.1543 13.7505 8.67122 13.0849 9.01666L8.9606 11.1568C8.67182 11.3067 8.32818 11.3067 8.0394 11.1568L3.91515 9.01666ZM8.96043 0.137254C8.67174 -0.0124854 8.32826 -0.012485 8.03957 0.137254L0.711447 3.93821C-0.00797868 4.31136 -0.00797755 5.34045 0.711448 5.7136L8.03953 9.51454C8.32824 9.66429 8.67175 9.66428 8.96046 9.5145L14.8122 6.47874C15.4779 6.13341 16.2727 6.61649 16.2727 7.3664V10.5322C16.2727 11.0092 16.6594 11.3959 17.1364 11.3959C17.6133 11.3959 18 11.0092 18 10.5322V5.43374C18 5.0603 17.7919 4.71798 17.4604 4.54604L8.96043 0.137254Z"
                            fill="#2F3165" fill-opacity="0.4"></path>
                    </svg>

                </i>
                <span>{{ maxLesson }} уроков</span>
            </div>
            <div class="count-lesson">
                <i>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.4 3.33301H0V12.3873C0 13.0987 0.630001 13.6807 1.4 13.6807H11.2V12.3873H1.4V3.33301Z"
                            fill="#2F2F66" fill-opacity="0.4"></path>
                        <path
                            d="M12.6008 0.746094H4.20078C3.43078 0.746094 2.80078 1.32815 2.80078 2.03956V9.80035C2.80078 10.5118 3.43078 11.0938 4.20078 11.0938H12.6008C13.3708 11.0938 14.0008 10.5118 14.0008 9.80035V2.03956C14.0008 1.32815 13.3708 0.746094 12.6008 0.746094ZM12.6008 7.21342L10.8508 6.24332L9.10079 7.21342V2.03956H12.6008V7.21342Z"
                            fill="#2F2F66" fill-opacity="0.4"></path>
                    </svg>

                </i>
                <span>{{ countHomework }} домашних заданий</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'circle-progressbar',
    data() {
        return {
            maxRadius: 502, //R = 2 * Pi * R
            strokeDasharrayValue: this.strokeDasharray,
            nowPersent: `${Math.ceil((this.nowLesson * 100) / this.maxLesson)}%`
        }
    },
    props: {
        modelValue: {
            type: String,
        },
        strokeDasharray: {
            type: String,
            default: '0, 502.4',
        },
        maxLesson: {
            type: Number,
            default: 8,
        },
        nowLesson: {
            type: Number,
            default: 2,
        },
        courseName: {
            type: String,
            default: 'Название курса',
        },
        countHomework: {
            type: Number,
            default: 0,
        },
    },
    mounted() {
        const ProgressBarPersent = (this.nowLesson * this.maxRadius) / this.maxLesson;
        this.strokeDasharrayValue = `${ProgressBarPersent} 502.4 `
    }
}

</script>

<style lang="scss" scoped>
</style>
