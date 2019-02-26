<template>
    <div class="login-container">
        <Login-element @set-template="setTemplate" v-if="templateState === 'element'"/>
        <Login-mobingi @set-template="setTemplate" v-if="templateState === 'mobingi'"/>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import LoginElement from './login-element'
import LoginMobingi from './login-mobingi'
    export default {
        name:'Login',
        components:{
            LoginElement,
            LoginMobingi
        },
        data() {
            return {
                templateState:Cookies.get('templateState') || 'mobingi'
            }
        },
        methods: {
            setTemplate (value) {
                this.templateState = value;
                Cookies.set('templateState',value);
            }
        }
    }
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100%
}
</style>