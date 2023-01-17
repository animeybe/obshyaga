const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostsController = require('./controllers/PostsController')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.post('/update', AuthenticationController.update)

    app.post('/uploadImage', AuthenticationController.uploadImage)

    app.post('/getAllPosts', PostsController.getAllPosts)

    app.post('/getPosts', PostsController.getPosts)

    app.post('/createposts', PostsController.post)

    app.post('/deletePost', PostsController.deletePost)
}
