import { http } from './axios'

class Api {
  // 获取验证码
  async getCaptcha(data) {
    return await http.get('/api/captcha', data).then((res) => res)
  }
  // 登陆
  async loginUwk(data) {
    return await http.post('/api/login_uwk', data).then((res) => res)
  }
  // 修改密码
  async editPasstword(data) {
    return await http.post('/api/edit_passtword', data).then((res) => res)
  }
  // 伪登陆接口-使用就锁ip
  async weiLogin(data) {
    return await http.post('/api/login', data).then((res) => res)
  }

  // 接口请求量、ip
  async getViews(data) {
    return await http.get('/api/get_views', data).then((res) => res)
  }

  // 上传-上传一张图片并压缩大小
  async uploadAvatarSD(data) {
    return await http.post('/api/uploadAvatar?type=sd', data).then((res) => res)
  }
  // 上传-同时多张图片并存储2张图片分别为高清合标清
  async uploadAvatarHD(data) {
    return await http.post('/api/uploadAvatar?type=hd', data).then((res) => res)
  }
  // 上传-上传视频-单条上传
  async uploadVideo(data) {
    return await http.post('/api/uploadVideo', data).then((res) => res)
  }

  // 图片-获取--项目类型
  async getPhotoProjectType(data) {
    return await http.get('/api/get_photo_project_type', data).then((res) => res)
  }
  // 图片-添加--项目类型
  async addPhotoProjectType(data) {
    return await http.post('/api/add_photo_project_type', data).then((res) => res)
  }
  // 图片-编辑--项目类型
  async editPhotoProjectType(data) {
    return await http.put('/api/edit_photo_project_type', data).then((res) => res)
  }
  // 图片-删除--项目类型
  async deletePhotoProjectType(data) {
    return await http.delete('/api/delete_photo_project_type', data).then((res) => res)
  }
  // 图片-获取--所有数据
  async getImageCategoryDetails(data) {
    return await http.get('/api/get_image_category_details', data).then((res) => res)
  }
  // 图片-新增--文章
  async addImageCategoryDetails(data) {
    return await http.post('/api/add_image_category_details', data).then((res) => res)
  }
  // 图片-编辑--文章
  async editImageCategoryDetails(data) {
    return await http.put('/api/edit_image_category_details', data).then((res) => res)
  }
  // 图片-删除--文章
  async deleteImageCategoryDetails(data) {
    return await http.delete('/api/delete_image_category_details', data).then((res) => res)
  }


  // 获取（图片、视频）详情
  async getDetail(data) {
    return await http.get('/api/get_detail', data).then((res) => res)
  }

  // 视频-获取视频项目分类
  async getVideoCategoryDetails(data) {
    return await http.get('/api/get_video_category_details', data).then((res) => res)
  }
  // 视频-获取--项目类型
  async getVideoProjectType(data) {
    return await http.get('/api/get_video_project_type', data).then((res) => res)
  }
  // 视频-添加--项目类型
  async addVideoProjectType(data) {
    return await http.post('/api/add_video_project_type', data).then((res) => res)
  }
  // 视频-编辑--项目类型
  async editVideoProjectType(data) {
    return await http.put('/api/edit_video_project_type', data).then((res) => res)
  }
  // 视频-删除--项目类型
  async deleteVideoProjectType(data) {
    return await http.delete('/api/delete_video_project_type', data).then((res) => res)
  }
  // 视频-新增--模块分类详情 | 文章
  async addVideoCategoryDetails(data) {
    return await http.post('/api/add_video_category_details', data).then((res) => res)
  }
  // 视频-编辑--模块分类详情 | 文章
  async editVideoCategoryDetails(data) {
    return await http.put('/api/edit_video_category_details', data).then((res) => res)
  }
  // 视频-删除--模块分类详情 | 文章
  async deleteVideoCategoryDetails(data) {
    return await http.delete('/api/delete_video_category_details', data).then((res) => res)
  }

  // 公司简介-获取详情
  async getCompanyProfileProject(data) {
    return await http.get('/api/get_companyProfile_project', data).then((res) => res)
  }
  // 公司简介-编辑详情
  async editCompanyProfile(data) {
    return await http.put('/api/edit_companyProfile_project', data).then((res) => res)
  }

  // 获取所有数据 下拉数据 - 最新资讯
  async getAallData(data) {
    return await http.get('/api/get_all_data', data).then((res) => res)
  }
  // 获取内容
  async get_LatestNews(data) {
    return await http.get('/api/get_latest_news', data).then((res) => res)
  }
  // 修改内容
  async editLatestNews(data) {
    return await http.put('/api/edit_latest_news', data).then((res) => res)
  }


  // 直播-获取--项目类型
  async getLiveProjectType(data) {
    return await http.get('/api/get_live_project_type', data).then((res) => res)
  }
  // 直播-添加--项目类型
  async addLiveProjectType(data) {
    return await http.post('/api/add_live_project_type', data).then((res) => res)
  }
  // 直播-编辑--项目类型
  async editLiveProjectType(data) {
    return await http.put('/api/edit_live_project_type', data).then((res) => res)
  }
  // 直播-删除--项目类型
  async deleteLiveProjectType(data) {
    return await http.delete('/api/delete_live_project_type', data).then((res) => res)
  }
  // 直播-获取--所有数据
  async getLiveCategoryDetails(data) {
    return await http.get('/api/get_live_category_details', data).then((res) => res)
  }
  // 直播-新增--文章
  async addLiveCategoryDetails(data) {
    return await http.post('/api/add_live_category_details', data).then((res) => res)
  }
  // 直播-编辑--文章
  async editLiveCategoryDetails(data) {
    return await http.put('/api/edit_live_category_details', data).then((res) => res)
  }
  // 直播-删除--文章
  async deleteLiveCategoryDetails(data) {
    return await http.delete('/api/delete_live_category_details', data).then((res) => res)
  }

  // VJ LJ 灯光-获取--项目类型
  async getVjLjProjectType(data) {
    return await http.get('/api/get_vj_lj_project_type', data).then((res) => res)
  }
  // VJ LJ 灯光-添加--项目类型
  async addVjLjProjectType(data) {
    return await http.post('/api/add_vj_lj_project_type', data).then((res) => res)
  }
  // VJ LJ 灯光-编辑--项目类型
  async editVjLjProjectType(data) {
    return await http.put('/api/edit_vj_lj_project_type', data).then((res) => res)
  }
  // VJ LJ 灯光-删除--项目类型
  async deleteVjLjProjectType(data) {
    return await http.delete('/api/delete_vj_lj_project_type', data).then((res) => res)
  }
  // VJ LJ 灯光-获取--所有数据
  async getVjLjCategoryDetails(data) {
    return await http.get('/api/get_vj_lj_category_details', data).then((res) => res)
  }
  // VJ LJ 灯光-新增--文章
  async addVjLjCategoryDetails(data) {
    return await http.post('/api/add_vj_lj_category_details', data).then((res) => res)
  }
  // VJ LJ 灯光-编辑--文章
  async editVjLjCategoryDetails(data) {
    return await http.put('/api/edit_vj_lj_category_details', data).then((res) => res)
  }
  // VJ LJ 灯光-删除--文章
  async deleteVjLjCategoryDetails(data) {
    return await http.delete('/api/delete_vj_lj_category_details', data).then((res) => res)
  }


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