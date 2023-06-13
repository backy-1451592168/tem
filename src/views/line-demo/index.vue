<template>
  <div id="frame">
    <div id="container">
      <div id="t1-1" class="terminal">1-1</div>
      <div id="t1-2" class="terminal">1-2</div>
      <div id="t2-1" class="terminal">2-1</div>
      <div id="t2-2" class="terminal">2-2</div>
      <div id="t2-3" class="terminal">2-3</div>
    </div>
    <div id="wrapper"></div>
  </div>
</template>

<script>
import LeaderLine from 'leader-line-vue';
export default({
  data() {
    return {
      idList: [
        {
          id: 't1-1',
          children: [{ id: 't2-1' }, { id: 't2-2' }]
        },
        {
          id: 't1-2',
          children: [{ id: 't2-2' }, { id: 't2-3' }]
        }
      ],
      lines: [],
    }
  },
  created(){
    this.drawLeaderLine()
  },
  methods: {
    drawLeaderLine() {
      this.$nextTick(()=> {
        var elmWrapper = document.getElementById('wrapper'),
          rectWrapper = elmWrapper.getBoundingClientRect(),
          line1 = LeaderLine.setLine(document.getElementById('t1-1'), document.getElementById('t2-1')),
          elmLine1 = document.querySelector('.leader-line:last-of-type'),
          line2 = LeaderLine.setLine(document.getElementById('t1-1'), document.getElementById('t2-2')),
          elmLine2 = document.querySelector('.leader-line:last-of-type'),
          line3 = LeaderLine.setLine(document.getElementById('t1-2'), document.getElementById('t2-2')),
          elmLine3 = document.querySelector('.leader-line:last-of-type'),
          line4 = LeaderLine.setLine(document.getElementById('t1-2'), document.getElementById('t2-3')),
          elmLine4 = document.querySelector('.leader-line:last-of-type');

          line1.color = 'rgba(30, 130, 250, 0.5)'
          line1.path = 'grid'
          line1.size = 3

          line2.color = 'rgba(217, 6, 27, 1)'
          line2.path = 'grid'
          line2.size = 3
          line2.setOptions({ dash: { animation: true }})

          line3.color = 'rgba(217, 6, 27, 1)'
          line3.path = 'grid'
          line3.size = 3
          line3.setOptions({ dash: { animation: true }})

          line4.color = 'rgba(30, 130, 250, 0.5)'
          line4.path = 'grid'
          line4.size = 3
          
        elmWrapper.style.transform = 'translate(-' + (rectWrapper.left + pageXOffset) + 'px, -' + (rectWrapper.top + pageYOffset) + 'px)';
        elmWrapper.appendChild(elmLine1);
        elmWrapper.appendChild(elmLine2);
        elmWrapper.appendChild(elmLine3);
        elmWrapper.appendChild(elmLine4);
      });
    },
    test1() {
      return {
        color: 'rgba(217, 6, 27, 1)',
        path: 'grid',
        size: 3,
        // setOptions({
        //   dash: {animation: true} // 动画/虚线
        // })
      }
    },
    test2() {
      return {
        color: 'rgba(30, 130, 250, 0.5)',
        path: 'grid',
        size: 3,
        // setOptions({
        //   dash: {animation: true} // 动画/虚线
        // })
      }
    },
    // 虚线
    dottedLine(id) {
      if (id == 't2-2') {
        return { dash: { animation: true } };
      } else {
        return {};
      }
    },
  }
})
</script>
<style>
#frame {
  width: 100%;
  height: 540px;
  overflow: scroll;
}

#container {
  width: 100%;
  height: 980px;
  position: relative;
  background-color: beige;
  color: #fff;
}

.terminal {
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: blue;
}

#t1-1 {
  left: 1rem;
  top: 200px;
}
#t1-2 {
  left: 1rem;
  top: 400px;
}

#t2-1 {
  left: 8rem;
  top: 100px;
}
#t2-2 {
  left: 8rem;
  top: 300px;
}
#t2-3 {
  left: 8rem;
  top: 600px;
}



#wrapper {
  width: 0;
  height: 0;
  position: relative; /* Origin of coordinates for lines, and scrolled content (i.e. not `absolute`) */
}

</style>