<template>
<div id="gradient">
  <div style="position: relative;">
    <img src="@/assets/img/pingguo.png">
    <div class="container">
      <a>
        <span>
          <p>M1</p></span>
      </a>
      <!-- <a>
        <span>Button</span>
      </a> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'gradient',
  components: {
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
#gradient {
  display: flex;
  // justify-content: center;
  // align-items: center;
  // min-height: 100vh;
  background: #0e1737;
  position: relative;
  width: 50%;
  left: 10px;
}
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: auto;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #0e1737;
      position: relative;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .container a {
      position: relative;
      width: 160px;
      height: 160px;
      display: block;
      // background: #fff;
      margin: 20px;
      /* border-radius: 20px; */
      border: 2px solid #000;
    }
    .container a:before,
    .container a:after {
      content: '';
      position: absolute;
      inset: 0;
      background: crimson;
      transition: 0.5s;
    }

    .container a:nth-child(1)::before,
    .container a:nth-child(1):after {
      background: linear-gradient(45deg, #00ccff,#0e1538,#d400d4);
      /* background: linear-gradient(0deg, #985a4b,#0e1538,#49368c); */
    }
    // .container a:nth-child(2)::before,
    // .container a:nth-child(2):after {
    //   background: linear-gradient(45deg, #00ccff,#0e1538);
    // }

    .container a:hover:before {
      inset: -3px;
    }
    .container a:hover:after {
      inset: -3px;
      filter: blur(10px);
    }
    .container a span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: #0d1120;
      z-index: 10;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 3em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: white;
    }
    .container a span p {
      position: absolute;
      right: 10px;
    }
    img {
      width: 75px;
      position: absolute;
      left: 1.2em;
      top: 4em;
      z-index: 15;
    }
</style>
