import Api from './Api'

export default {
  getAllPosts (dorm) {
    return Api().post('getAllPosts', dorm)
  },
  getPosts (options) {
    return Api().post('getPosts', options)
  },
  createPost (post) {
    return Api().post('createposts', post)
  },
  deletePost (id) {
    return Api().post('deletePost', id)
  }
}
