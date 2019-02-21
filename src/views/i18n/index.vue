<template>
    <div>
        <span @click="changeLang('zh')">中文</span>
        <span @click="changeLang('en')">英语</span>
        <span @click="changeLang('ja')">日语</span>
        <p>{{$t('test.hello')}}</p>

        <div class="block">
            <span class="demonstration">element语言包测试</span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
    </div>
</template>

<script>
import messages from './test.js'
import Cookies from 'js-cookie'
    export default {
        data() {
            return {
                color1: '#409EFF',
                color2: null
            }
        },
        methods: {
            changeLang(lang) {
                this.$i18n.locale = lang;
                Cookies.set('language',lang)
            }
        }
    }
</script>

<style scoped>
span {
    cursor: pointer;
}
</style>