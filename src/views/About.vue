<template>
  <div id="about">
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :content="contents"
      class="myQuillEditor"
      :options="editorOption"/>
    </quill-editor>

    <el-button type="primary" @click="submit">提交</el-button>
    <div style="width: 50%; border: 3px solid salmon; min-height: 50px; margin-top: 20px;">
      {{content}}
      <p>-----------------------------</p>
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="content"></div>
      </div>
    </div>

  </div>
</template>

<script>

import { quillEditor } from 'vue-quill-editor'
import { addQuillTitle } from '@/modules/quill-title.js'
// import '@/scss/quill.snow.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'


export default {
  name: 'about',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '',
      contents: '',
      editorOption: {
        modules: {
          toolbar: {
            // 配置工具栏，此次引入了全部工具栏，也可自行配置
            container: [
              ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
              ['blockquote', 'code-block'], //引用，代码块
              [{'header': 1}, {'header': 2}], // 标题，键值对的形式；1、2表示字体大小
              [{'list': 'ordered'}, {'list': 'bullet'}], //列表
              [{'script': 'sub'}, {'script': 'super'}], // 上下标
              [{'indent': '-1'}, {'indent': '+1'}], // 缩进
              [{'direction': 'rtl'}], // 文本方向
              [{'size': ['small', false, 'large', 'huge']}], // 字体大小
              [{'header': [1, 2, 3, 4, 5, 6, false]}], //几级标题
              [{'color': []}, {'background': []}], // 字体颜色，字体背景颜色
              // [{'font': fonts}], //字体
              [{'align': []}], //对齐方式
              ['clean'], //清除字体样式
              // ['image', 'video'] //上传图片、上传视频
            ]
          }
        }
      }
    }
  },
  created () {
  },
  computed: {
  },
  mounted: ()=>{
    addQuillTitle()
  },
  methods: {
    // 文字内容
    onEditorChange({ quill, html, text }) {
      // console.log("editor change", quill);
      // console.log("editor text", text);
      // console.log("editor html", html);
      this.content = html; // 保存输入的内容
    },
    submit () {
      // console.log(this.$refs.myQuillEditor.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import "@/scss/font-family.scss"
</style>
