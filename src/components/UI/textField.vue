<!--Textarea на странице "Написать преподавателю" -->
<template>
    <div class="wrap-input">
        <textarea class="input" @focus="isFocused = true" @blur="isFocused = false" @input="changeValue"
            v-model="inputValue"></textarea>
        <div class="label custom-label" :class="{ 'active': isActive }">Введите своё сообщение
        </div>
    </div>

    <div class="wrap-input-file">
        <input type="file" name="file" id="file" class="input-file" @change="onFileUpload">
        <label for="file" class="btn-tertiary js-labelFile">
            <i>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.40767 0C2.65767 0 2.04403 0.613636 2.04403 1.36364V1.81818H0.90767C0.884943 1.81818 0.884943 1.81818 0.862216 1.81818C0.634943 1.84091 0.453125 2.04545 0.453125 2.27273V19.5455C0.453125 19.7727 0.680398 20 0.90767 20H14.9986C15.2259 20 15.4531 19.7727 15.4531 19.5455V5.90909C15.4531 5.79545 15.4077 5.65909 15.3168 5.5909L11.6804 1.95454C11.5895 1.86363 11.4759 1.81818 11.3622 1.81818H4.77131V1.36364C4.77131 0.613636 4.15767 0 3.40767 0ZM3.40767 0.909091C3.65767 0.909091 3.86222 1.11364 3.86222 1.36364V1.81818H2.95312V1.36364C2.95312 1.09091 3.15767 0.909091 3.40767 0.909091ZM1.36222 2.72727H2.04403V6.59091C2.04403 7.75 3.08949 8.63636 4.31676 8.63636C5.54403 8.63636 6.58949 7.75 6.58949 6.59091V2.72727H10.9077V5.90909C10.9077 6.13636 11.1349 6.36364 11.3622 6.36364H14.544V19.0909H1.36222V2.72727ZM2.95312 2.72727H3.86222V6.36364C3.86222 6.61364 4.06676 6.81818 4.31676 6.81818C4.56676 6.81818 4.77131 6.59091 4.77131 6.36364V2.72727H5.6804V6.59091C5.6804 7.18182 5.11222 7.72727 4.31676 7.72727C3.52131 7.72727 2.95312 7.18182 2.95312 6.59091V2.72727ZM11.8168 3.36363L13.9077 5.45455H11.8168V3.36363ZM2.90767 10.2273C2.6804 10.2273 2.45312 10.4545 2.47585 10.7045C2.47585 10.9318 2.70312 11.1591 2.95312 11.1364H12.9531C13.2031 11.1364 13.4077 10.9318 13.4077 10.6818C13.4077 10.4318 13.1804 10.2273 12.9531 10.2273H2.95312C2.9304 10.2273 2.9304 10.2273 2.90767 10.2273ZM2.90767 12.7273C2.6804 12.7273 2.45312 12.9545 2.47585 13.2045C2.47585 13.4318 2.70312 13.6591 2.95312 13.6364H12.9531C13.2031 13.6364 13.4077 13.4318 13.4077 13.1818C13.4077 12.9318 13.1804 12.7273 12.9531 12.7273H2.95312C2.9304 12.7273 2.9304 12.7273 2.90767 12.7273ZM2.90767 15.2273C2.6804 15.2273 2.45312 15.4545 2.47585 15.7045C2.47585 15.9318 2.70312 16.1591 2.95312 16.1364H12.9531C13.2031 16.1364 13.4077 15.9318 13.4077 15.6818C13.4077 15.4318 13.1804 15.2273 12.9531 15.2273H2.95312C2.9304 15.2273 2.9304 15.2273 2.90767 15.2273Z">
                    </path>
                </svg>

            </i>
            <span class="js-fileName">{{ fileName }}</span>
        </label>
    </div>

</template>

<script>
export default {
    name: 'text-field',
    props: {
        modelValue: {
            type: String
        },
    },
    data() {
        return {
            fileName: 'Прикрепить файл',
            isFocused: false,
            inputValue: '',
            isActive: false,
        }
    },
    methods: {
        //Проверка входного файла
        onFileUpload(e) {
            const file = e.target.files[0];
            const fileName = file.name.split('.');
            let expansion = '';
            fileName.length > 1 ? expansion = fileName.pop() : null;
            const fileSize = file.size;

            const expansionMas = [
                'jpg', 'jpg', 'png', 'webp', 'svg', 'bmp',
                'pdf',
                'doc', 'dot', 'wbk', 'docx', 'docm', 'dotx', 'dotm', 'docb', 'doc',
                'xls', 'xlt', 'xlm', 'xlsx', 'xlsm', 'xltx', 'xltm', 'xlsb', 'xlt', 'xps',
                'mp3',
            ];

            for (const el of expansionMas) {
                if (expansion === el && fileSize <= 10000000) {
                    this.fileName = file.name;
                } else {
                    e.preventDefault();
                }
            }

        },
        changeValue(event) {
            this.$emit('update:modelValue', event.currentTarget.value);
        },
        changeClass() {
            console.log(123);
        }
    },
    watch: {
        'isFocused': function (value) {
            // console.log(this.$el.parentNode.querySelector('.wrap-input div.label'));
            if (value)
                this.isActive = true;
            else if (!value && this.inputValue == '')
                this.isActive = false;
            if (this.inputValue.trim().length > 0) {
                this.isActive = true;
            }
            // 'isFocused': function (value) {
            // if (value)
            //     this.$el.parentNode.querySelector('.wrap-input div.label').classList.add('active');
            // else if (!value && this.inputValue == '')
            //     this.$el.parentNode.querySelector('.wrap-input div.label').classList.remove('active');
            // }
        },
    },
}
</script>

<style lang="scss" scoped>
// .custom-label:hover {
//     pointer-events: none;
//       cursor: pointer;
// }

.custom-label {
    cursor: pointer;
}
</style>
