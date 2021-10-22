<template>
  <div id="wenzi">
    <p ref="word" style="display: none;">大家好，我是东，来自南方。</p>
    <div class="show" ref="show"></div><div v-if="ganShow" class="gan"></div>
  </div>
</template>

<script>
export default {
  name: 'wenzi',
  data () {
    return {
      timer: null,
      ganTimer: null,
      ganShow: false
    }
  },
  created () {
    this.diaoyong()
  },
  computed: {
  },
  methods: {
    diaoyong() {
      this.$nextTick(_ =>{
        let story = this.$refs.word
        let s = this.$refs.show
        let i = 0;
        

        this.ganTimer=setInterval(()=>{
          this.ganShow = !this.ganShow
        }, 500)

        this.timer=setInterval(()=>{
          s.innerHTML=story.innerHTML.substring(0,i)
          i++;
          if(s.innerHTML==story.innerHTML){
            clearInterval(this.timer);
          }
        },300);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#wenzi {
  display: flex;
  .show{
    display: inline-block;
    line-height: 50px;
    font-size: 26px;
  }
  .gan{
    display: inline-block;
    height: 50px;
    width: 1px;
    border: 1px solid #b5adad;
  }
}
</style>
