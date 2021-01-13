<template>
    <div id = "company">
       <a-row>
      <a-col :span="15">
    <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="账号" >
       122313123131
    </a-form-model-item>
    <a-form-model-item ref="name" label="用户名" >
    yoyoyoyoy'
</a-form-model-item>
<a-form-model-item ref="name" label="公司名">
    xxxxxxxx
</a-form-model-item>
<a-form-model-item ref="name" label="融资情况" >
  sdasdadad
</a-form-model-item>
  
  <a-form-model-item ref="name" label="公司地址" >
  sdasdadad
</a-form-model-item>
  
    <a-form-model-item label="Activity zone" prop="region">
      <a-select v-model="form.region" placeholder="please select your zone">
        <a-select-option value="shanghai">
          Zone one
        </a-select-option>
        <a-select-option value="beijing">
          Zone two
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="Activity time" required prop="date1">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%;"

      />
    </a-form-model-item>
    <a-form-model-item label="Instant delivery" prop="delivery">
      <a-switch v-model="form.delivery" />
    </a-form-model-item>
    <a-form-model-item label="Activity form" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
      </a-col>
      <a-col :span="6" >
 
        <cut></cut>
 
      </a-col>
     
    </a-row>


    </div>
</template>
<script>
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

import cut from "./cut"




export default {
    name:"career",
  components:{
    cut
  
  },

    data() {
    return {
      Imagedata:'',   //预览图片
      visible: false,  //控制对话框的显示
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },

 handleOk(e) {
   console.log(e);
   this.visible = false;

 },
 }
};
</script>

<style scoped>
.ant-avatar{
  width: 150px;
  height: 150px;
  top:50px;
  border: 1px solid black;
}
.touxiang{
  position: relative;
  top:50px;
}
#tx{
  display: block;
  max-width: 100%;
}
</style>