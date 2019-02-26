<template>
  <div class="login-mobingi-container">
    <el-card class="box-card">
      <div class="login-logo">
        <img src="../../assets/logo/wave_logo.png" width="100">
      </div>
      <h3 class="login-title">
        {{$t('login.login')}}
      </h3>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <el-form-item :label="$t('login.user')" prop="username">
          <span class="svg-container">
                <svg-icon icon-class="user2" />
              </span>
          <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <span class="svg-container">
                <svg-icon icon-class="psw"/>
              </span>
          <el-input :type="pwdType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="password" @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
              </span>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            {{$t('login.login')}}
          </el-button>
        </el-form-item>
      </el-form>
      <div class="login-footer">
        <change-lang @on-change="handleChangeLang"/>
        <change-template @on-change="handleChangeTemplate"/>
        <!-- <router-link to="login">{{$t('login.resetpsw')}}</router-link> -->
      </div>
    </el-card>
  </div>
</template>

<script>
  import {
    isvalidUsername
  } from '@/utils/validate'
  import ChangeLang from '@/components/ChangeLang'
  import ChangeTemplate from '@/components/ChangeTemplate'

  export default {
    name: 'LoginMobingi',
    components:{
      ChangeLang,
      ChangeTemplate
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error(this.$t('login.validatauser')))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error(this.$t('login.validatapsw')))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginRules: {
          username: [{
            required: true,
            trigger: 'change',
            validator: validateUsername
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePass
          }]
        },
        loading: false,
        pwdType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({
                path: this.redirect || '/'
              })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleChangeLang() {
        this.$refs['loginForm'].validate((valid) => {});
      },
      handleChangeTemplate(value) {
        this.$emit('set-template', value)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .login-mobingi-container {
    min-width: 100%;
    min-height: 100%;
    padding: 20px 0;
    background: url(../../assets/logo/bg.png) 0px top repeat, linear-gradient(to bottom, #D7BBEA, #65A8F1);
    display: flex;
    justify-content: center;
    align-items: center;
    .el-card__body {
      padding: 0
    }
    .box-card {
      min-width: 450px;
    }
    .login-logo {
      width: 100%;
      padding: 20%;
      text-align: center;
    }
    .login-title {
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      padding-left: 80px;
      position: relative;
      &:after {
        content: "";
        background-color: #047bf8;
        width: 32px;
        height: 7px;
        border-radius: 2px;
        display: block;
        position: absolute;
        bottom: -4px;
        left: 80px;
      }
    }
    .login-form {
      padding: 20px 80px;
      padding-bottom: 60px;
      .svg-container {
        position: absolute;
        top: 40px;
        font-size: 24px;
        left: -38px;
      }
    }
    .login-footer {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      font-size: 14px;
      a {
        color: #3b75e3;
      }
    }
  }
</style>
