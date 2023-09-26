<template>
  <div id="loading">
    <div class="loading">Loading...</div>  
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    let loading = document.querySelector(".loading");
    let letters = loading.textContent.split("");
    loading.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i / 10}s`;
      // 添加类名到span元素
      span.className = "animated-text";
      loading.append(span);
    });
  }
}
</script>
<style>
  /* @import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap"); */

  #loading {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #000;

  }
  .loading {
    display: flex;
    color: white;
    font-size: 2em;
    /* font-family: system-ui; */
    /* font-family: "Baloo Bhaijaan", cursive;system-ui */
    text-transform: uppercase;
  }
  .animated-text {
    text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(10px);
    animation: bounce 0.3s ease infinite alternate;
  }

  @keyframes bounce {
    to {
      text-shadow: 0 1px transparent, 0 2px transparent, 0 3px transparent, 0 4px transparent, 0 5px transparent, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px transparent, 0 50px 25px rgba(0, 0, 0, 0.2);
      transform: translateY(-10px);
    }
  }
</style>