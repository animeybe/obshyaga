const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostsController = require('./controllers/PostsController')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.post('/update', AuthenticationController.update)

    app.get('/posts', PostsController.index)
    app.post('/posts', PostsController.post)
}
