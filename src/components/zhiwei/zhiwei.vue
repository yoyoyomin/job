<template>
    <div id = "zhiwei">
 <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
   <a-form-model-item label="状态" prop="resource">
   <a-radio-group v-model="form.resource">
     <a-radio value="1">
       全部
     </a-radio>
     <a-radio value="2">
       草稿
     </a-radio>
      <a-radio value="3">
   待审核
 </a-radio>
  <a-radio value="4">
  审核通过
 </a-radio>
  <a-radio value="5">
  审核失败
 </a-radio>
  <a-radio value="6">
   已删除
 </a-radio>
   </a-radio-group>
 </a-form-model-item>
 
    <a-form-model-item ref="name" label="职位名称" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="所有行业" prop="region">
      <a-select v-model="form.region" placeholder="选择你想要的职位">
        <a-select-option value="jishu">
          计算机/互联网/通信
        </a-select-option>
        <a-select-option value="caiwu">
          会计/金融/银行/保险
        </a-select-option>
        <a-select-option value="yunyin">
         贸易/消费/制造/运营
        </a-select-option>
        
      </a-select>
    </a-form-model-item>
     
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        筛选
      </a-button>
    </a-form-model-item>

  </a-form-model>
<zhiweitable></zhiweitable>
</div>
    
</template>
<script>
import zhiweitable from './zhiweitable'

export default {
    name:'zhiwei',
    components:{
        zhiweitable
    },
    data(){
        return{
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

        }
    },
    rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
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
    }
  
}
</script>