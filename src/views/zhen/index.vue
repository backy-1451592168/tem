<template>
  <div id="deviceNavigation">
    <div>
      <Button type="dashed" @click="ch">中文</Button>
      <Button type="dashed" @click="en">英文</Button>
      <div>
        {{$t('hello')}}
      </div>
    </div>
    <div>
      <Button type="primary" @click="modal1 = true">{{$t('test')}}</Button>
      <Modal
          v-model="modal1"
          title="Common Modal dialog box title"
          @on-ok="ok"
          @on-cancel="cancel">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deviceNavigation',
  data () {
    return {
      data: 'hello',
      modal1: false
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    ch () {
      this.$i18n.locale = 'zh'
    },
    en () {
      this.$i18n.locale = 'en'
    },
    ok () {
        this.$Message.info(`${this.$t('ClickedOk')}`);
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style lang="scss" scoped>
#deviceNavigation {
}
</style>
