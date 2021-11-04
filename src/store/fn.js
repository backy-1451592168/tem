
// 全屏
export function switchFullscreen (isFullscreen) {
  if (isFullscreen) {
    const cfs = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen
    if(typeof cfs != "undefined" && cfs) {
      cfs.call(document)
    }
  } else {
    const el = document.documentElement;
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
    if(typeof rfs != "undefined" && rfs) {
      rfs.call(el)
    }
  }
}