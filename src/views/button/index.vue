<template>
  <div id="picBox">
    <input type="checkbox" id="burger-toggle">
    <label for="burger-toggle" class="burger-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'deviceNavigation',
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
#deviceNavigation {
  padding: 0;
}
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  background: #ECEFFC;
}

#burger-toggle {
  appearance: none;
  opacity: 0;

  &:checked {

    // 这里不要使用 box-shadow 进行叠加，因为它会损害性能。
    &~.overlay {
      opacity: 1;
      transform: scale(160);
    }

    &~.burger-menu {
      .line {
        &:nth-child(1) {
          transform: translateY(calc(var(--burger-menu-radius) / 5)) rotate(45deg);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:nth-child(3) {
          transform: translateY(calc(var(--burger-menu-radius) / -5)) rotate(-45deg);
        }
      }
    }
  }
}

.burger-menu {
  --burger-menu-radius: 4em;
  position: relative;
  z-index: 100;
  display: block;
  width: var(--burger-menu-radius);
  height: var(--burger-menu-radius);
  background: white;
  // border: solid 2px hsla(184, 9%, 62%, 0.4);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: hsla(210, 29%, 24%, 0.3);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2980b9;
      transform: translateX(-100%);
      transition: all 0.25s ease;
    }

    @for $i from 2 through 3 {
      &:nth-child(#{$i})::after {
        transition-delay: 0.1s * ($i - 1);
      }
    }
  }

  &:hover {
    box-shadow:
      0.4px 0.4px 0.8px rgba(0, 0, 0, 0.042),
      1px 1px 2px rgba(0, 0, 0, 0.061),
      1.9px 1.9px 3.8px rgba(0, 0, 0, 0.075),
      3.4px 3.4px 6.7px rgba(0, 0, 0, 0.089),
      6.3px 6.3px 12.5px rgba(0, 0, 0, 0.108),
      15px 15px 30px rgba(0, 0, 0, 0.15);

    .line::after {
      transform: translateX(0);
    }
  }
}

.overlay {
  position: absolute;
  width: 2em;
  height: 2em;
  background: hsla(204, 64%, 44%, 0.9);
  border-radius: 50%;
  opacity: 0;
  transition: 0.5s ease-in-out;
  will-change: transform;
}
</style>
