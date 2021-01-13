<template>
<div id = "login">
  <a-form
  id="components-form-demo-normal-login"
  :form="form"
  class="login-form"
  @submit="handleSubmit"
>
  <a-form-item>
    <a-input
      v-decorator="[
        'userName',
        { rules: [{ required: true, message: '请输入您的用户名！' }] },
      ]"
      placeholder="请输入您的用户名"
    >
      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
    </a-input>
  </a-form-item>
  <a-form-item>
    <a-input
      v-decorator="[
        'password',
        { rules: [{ required: true, message: '请输入您的密码！' }] },
      ]"
      type="password"
      placeholder="请输入您的密码"
    >
      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
    </a-input>
  </a-form-item>
  <a-form-item>
    <a-checkbox
      v-decorator="[
        'remember',
        {
          valuePropName: 'checked',
          initialValue: true,
        },
      ]"
    >
     记住密码
    </a-checkbox>
    <a class="login-form-forgot" href="">
      忘记密码
    </a>
    <a-button type="primary" html-type="submit" @click="onLogin" class="login-form-button">
      登录
    </a-button>
    Or
    <router-link to="/registe">
    <a href="">
      注册
    </a>
    </router-link>
  </a-form-item>
</a-form>
</div> 
</template>

<script>
export default {
  name:'login',
  data(){
    return {
      userName:'ykm',
      password:'12345'
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    onLogin(){

      const userName = this.userName
      //获取表单数据
      //表单验证
      //验证通过
     this.$message.success('This is a success message');
    }
  },
};
</script>
<style>
#login{
  width: 400px;
  height: 270px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  position: relative;
  text-align: center;
  margin: 0 auto;
 top:200px;

}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>




