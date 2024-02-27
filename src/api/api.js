import { http } from './axios'

class Api {
  // 哈希检查
  async hash_check(data) {
    return await http.post('/api/hash_check', data).then((res) => res)
  }
  // 分片上传
  async chunks_upload(data) {
    return await http.post('/api/chunks_upload', data).then((res) => res)
  }
  // 分片合并
  async chunks_merge(data) {
    return await http.post('/api/chunks_merge', data).then((res) => res)
  }
}

export default new Api()