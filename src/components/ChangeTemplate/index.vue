<template>
    <el-dropdown trigger="click" @command="handleChangeTemplate">
        <span class="svg-container" :style="iconStyle">
            <svg-icon icon-class="template"/>
            <svg-icon icon-class="open"/>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="element">element</el-dropdown-item>
            <el-dropdown-item command="mobingi">mobingi</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        name: 'ChangeTemplate',
        props: {
            iconStyle: {
                type: Object,
                default: () => {}
            },
        },
        methods: {
            handleChangeTemplate(value) {
                this.$emit('on-change', value)
            }
        }
    }
</script>

<style scoped>
    .svg-container {
        cursor: pointer;
    }
</style>