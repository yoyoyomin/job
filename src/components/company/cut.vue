<template>
<div>
  <label for="file">
  <el-avatar 
  shape="square" 
  :size="150" 
  fit="cover" 
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  >
  </el-avatar>
  <p>点击修改头像</p>

  </label>
   <input type="file" hidden id = "file" @change="filechange" ref="file">

   <el-dialog
  title="修改头像"
  :visible.sync="dialogVisible"
  width="30%"
  append-to-body
  @opened = 'onDialogOpen'
  >
  <div>
    <img :src="previewImage" alt="" id = 'preimage'>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="onUpdatePhoto">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

  export default {
      name:'cut',
    data() {
      return {
        dialogVisible: false,
        previewImage:'',
        cropper:null
      }
    },
    methods:{
      filechange(){
        const file = this.$refs.file

        const blobData = window.URL.createObjectURL(file.files[0])

        this.previewImage = blobData

        //展示对话框，预览图片
        this.dialogVisible = true

        
        //解决选择相同文件不触发的问题
        this.$refs.file.value = ""
      },
      onDialogOpen(){
        if(this.cropper){
          this.cropper.replace(this.previewImage)
          return
        }
        //获取图片
        const image = document.getElementById('preimage');
        //初始化裁切器
         this.cropper = new Cropper(image, {
        //裁剪比例
        aspectRatio:1,
        //裁剪框不超出图片
        viewMode:1,
        //不可以改裁剪框的大小
         cropBoxResizable:false
         /*  crop(event) { */
         /*    console.log(event.detail.x); */
          /*    console.log(event.detail.y); */
          /*    console.log(event.detail.width); */
          /*    console.log(event.detail.height); */
          /*    console.log(event.detail.rotate); */
        /*    console.log(event.detail.scaleX); */
        /*    console.log(event.detail.scaleY); */
        /*  }, */
});
      },
      onUpdatePhoto(){
        this.cropper.getCroppedCanvas().toBlob(file => {
          const fd = new FormData()
          fd.append('photo',file)
          })
      }
    }
  }
</script>

<style>
  #preimage{
    display: block;
    max-width: 100%;
    height: 200px;
  }
</style>