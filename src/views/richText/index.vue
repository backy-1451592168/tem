<template>
  <div id="editor"></div>
</template>
 
<script>
import Quill from 'quill';
import { addQuillTitle } from "@/modules/quill-title.js";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import "quill/dist/quill.bubble.css"
import "./richText.css"; // 重置样式
 
export default {
  name: 'QuillEditor',
  data() {
    return {
      quill: {},
      content: ''
    };
  },
  mounted() {
    let fontSizeStyle = Quill.import("attributors/style/size");
    fontSizeStyle.whitelist = [ '16px', '12px', '14px', '18px', '20px', '24px', '36px'];
    Quill.register(fontSizeStyle, true);
    const container = document.getElementById('editor');
    this.quill = new Quill(container, {
      // 配置Quill编辑器的选项
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ size: fontSizeStyle.whitelist }], // 字体大小
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['clean'],
          ['image']
        ],
      },
      placeholder: '请输入...',
      theme: 'snow'  // or 'bubble'
    });
    this.quill.on('text-change', this.onTextChange);
    this.$nextTick((_) => {
      addQuillTitle();
    });
  },
  methods: {
    onTextChange() {
      // 在输入事件中获取编辑器的内容
      this.content = this.quill.root.innerHTML;
      console.log(this.content);
    },
    getContent() {
      // 在按钮点击事件中获取编辑器的内容
      console.log(this.content);
    }
  },
  beforeDestroy() {
    // 清理 Quill 编辑器的根元素
      const toolbarElement = document.querySelector('.ql-toolbar');
      if (toolbarElement) {
        toolbarElement.remove();
      }
      // 将 Quill 实例置为 null
      this.quill = null;
  }
};
</script>
<style scoped lang='scss'>
  
</style>