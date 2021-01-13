<template>
    <div id = "registe">
<a-form class = "fram" :form="form" @submit="handleSubmit" >
    <a-form-item v-bind="formItemLayout" label="邮箱">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '邮箱格式不正确!',
              },
              {
                required: true,
                message: '请输入您的邮箱!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请设置您的密码!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="重复密码" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请重复您的密码!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        真实姓名&nbsp;
        <a-tooltip title="What do you want others to call you?">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: '请输入您的真实姓名！', whitespace: true }],
          },
        ]"
      />
    </a-form-item>
    
    <a-form-item v-bind="formItemLayout" label="地址">
      <a-cascader
        v-decorator="[
          'residence',
          {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: '请选择您的地址！' },
            ],
          },
        ]"
        :options="residences"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="联系方式">
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入您的手机号码' },
            {pattern:/^1[3|5|8|9]\d{9}$/ , message:'请输入正确的手机号码！'}],
          },
        ]"
        style="width: 100%"
      >
        <a-select
          slot="addonBefore"
          v-decorator="['prefix', { initialValue: '86' }]"
          style="width: 70px"
        >
          <a-select-option value="86">
            +86
          </a-select-option>
          <a-select-option value="87">
            +87
          </a-select-option>
        </a-select>
      </a-input>
    </a-form-item> 

    <a-form-item
      v-bind="formItemLayout"
      label="验证码"
      
    >
      <a-row :gutter="8">
        <a-col :span="12">
          <a-input
            v-decorator="[
              'captcha',
              { rules: [{ required: true, message: '请输入您获得的验证码!' }] },
            ]"
          />
        </a-col>
        <a-col :span="12">
          <a-button>获取验证码</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        我已经阅读过
        <a href="">
         协议
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        注册
      </a-button>
    </a-form-item>
  </a-form>
    </div>
</template>
<script>
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default {
    name:'registe',
    data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次密码输入不一致!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
}
</script>

<style>
    #registe{
        width: 600px;
        height: 650px;
        background-color: #ffffff;
       position: relative;
       margin: 0 auto;
    }
    .fram{
        width: 500px;
        height: 500px;
        position: relative;
        padding-right: -20px ;
        padding-top: 50px;
    }
</style>