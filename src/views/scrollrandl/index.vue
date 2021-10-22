<template>
  <div id="picBox">
    <vue-typed-js
      :strings="['<h1>BACKY测试</h1>']"
      :shuffle="true"
      :typeSpeed="100"
      :fadeOutClass="'fadeOutClass'"
      :loop="true"
      :loopCount="1"
      :showCursor="true"
      :fadeOutDelay="15"
      :backDelay="100"
      :autoInsertCss="true"
      :cursorChar="'|'"
      :startDelay="500"
      :contentType="'html'"
    >
      <p class="typing"></p>
    </vue-typed-js>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
export default {
  name: 'deviceNavigation',
  components: {
    VueTypedJs
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
#deviceNavigation {
  }
  /deep/.typing {
    margin-top: 6px;
  }
  /deep/.typed-cursor {
    font-size: 45px;
  }
</style>
