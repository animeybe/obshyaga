import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  update (data) {
    return Api().post('update', data)
  },
  uploadImage (data) {
    return Api().post('uploadImage', data)
  }
}
