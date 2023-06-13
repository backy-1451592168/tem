let watermark = {}

let setWatermark = (key1, key2, key3, key4) => {
  let id = '1.23452384164.123412416'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  //创建一个画布
  let can = document.createElement('canvas')
  //设置画布的长宽
  can.width = 400
  can.height = 290

  let cans = can.getContext('2d')
  //旋转角度
  cans.rotate(-15 * Math.PI / 180)
  cans.font = '18px Vedana'
  //设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = 'rgba(200, 200, 200, 0.40)'
  //设置文本内容的当前对齐方式
  cans.textAlign = 'left'
  //设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle'
  //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  cans.fillText(key1, can.width / 4, can.height / 1.6)
  cans.fillText(key2, can.width / 4, can.height / 1.95)
  cans.fillText(key3, can.width / 4, can.height / 2.5)
  cans.fillText(key4, can.width / 4, can.height / 3.4)
  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '30px'
  div.style.left = '0px'
  div.style.position = 'absolute'
  div.style.zIndex = '100000'
  // div.style.width = document.documentElement.clientWidth + 'px'
  // div.style.height = document.documentElement.clientHeight + 'px'
  div.style.width = '100%'
  div.style.height = '100%'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  //   document.body.appendChild(div)
  div.style.opacity = '0.7' // 水印的透明度

  let show = document.getElementById("show") // 控制水印显示的区域，设置id = show,表示在该范围内有水印
  show.style.cssText = "position: relative;"; // 给添加的水印加上定位
  // if (show) {
    show.appendChild(div)
  // }
  return id
}

// 该方法只允许调用一次
watermark.set = (key1, key2, key3, _this) => {
  let date = _this.$moment().format('YYYY-MM-YY')
  let id = setWatermark(date, key3, key2, key1) // str,date 代表的是两行水印。如果需好几个的话再追加。
  setTimeout(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(date, key3, key2, key1)
    }
  }, 500);
  // window.onresize = () => {
  //   setWatermark(date2, date1, date, str)
  // };
}

export default watermark