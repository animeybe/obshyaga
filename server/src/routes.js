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

    app.post('/getposts', PostsController.index)

    app.post('/getauthorname', PostsController.getAuthorName)

    app.post('/createposts', PostsController.post)
}
