<template>
    <el-dropdown trigger="click" @command="handleChangeLang">
        <span class="svg-container" :style="iconStyle">
            <svg-icon icon-class="international"/>
            <svg-icon icon-class="open"/>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command="ja">日本語</el-dropdown-item>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        name: 'ChangeLang',
        props: {
            iconStyle: {
                type: Object,
                default: () => {}
            },
        },
        methods: {
            handleChangeLang(lang) {
                this.$i18n.locale = lang;
                Cookies.set('language', lang);
                this.$emit('on-change', lang)
            },
        }
    }
</script>

<style scoped>
    .svg-container {
        cursor: pointer;
    }
</style>