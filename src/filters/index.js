import moment from 'moment'

/**
 * 小数点后保留位数
 * @param {*} value 过滤器传入值
 * @param {Number} num 保留位数，不传默认保留两位
 * @return {String} 返回保留
 */
const toFixed = (value, num) => {
  const res = parseFloat(value)
  if (!res && res !== 0) return 0
  if (num) {
    return Number(res.toFixed(num))
  } else {
    return Number(res.toFixed(2))
  }
}

/**
 * 数值转万，四舍五入保留一位小数
 * @param {*} value 过滤器传入值
 * @param {Number} num 保留位数，不传默认保留两位
 * @return {String} 返回保留
 */
const numberFormat = (value) => {
  const res = parseFloat(value)
  if (!res) return value
  if (res < 10000) return res.toFixed(1)
  return (res / 10000).toFixed(1) + '万'
}

/**
 * 日期格式化
 * @param {*} value 过滤器传入值
 * @param {String} type 格式化格式
 * @return {String} 返回值
 */
const dateFormat = (value, type = 'YYYY-MM-DD') => {
  if (!value) return value
  return moment(value).format(type)
}

/**
 * 字符串去除回车字符
 * @param {*} value 过滤器传入值
 * @return {String} 返回值
 */
const removeEnterChart = (value) => {
  if (!value) return value
  return value.replace(/[\r\n]/g, '')
}

/**
 * 日期字段转中文
 * @param {String} value 过滤器传入值
 * @return {String} 返回值
 */
const dateStrToChinese = (value) => {
  if (!value) return value
  switch (value) {
    case 'hour': return '小时'
    case 'day': return '天'
    case 'week': return '周'
  }
}

export default {
  toFixed,
  numberFormat,
  dateFormat,
  removeEnterChart,
  dateStrToChinese
}
