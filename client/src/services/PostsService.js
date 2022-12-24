import Api from './Api'

export default {
  getAllPosts (dorm) {
    return Api().post('getposts', dorm)
  },
  getAuthorName (id) {
    return Api().post('getauthorname', id)
  },
  createPost (post) {
    return Api().post('createposts', post)
  }
}
