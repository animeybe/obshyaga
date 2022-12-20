import Api from './Api'

export default {
  getAllPosts () {
    return Api().get('posts')
  },
  createPost (post) {
    return Api().post('posts', post)
  }
}
