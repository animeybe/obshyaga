const {Post} = require('../models')

module.exports = {
    async getAllPosts (req, res) {
        try {
            const { dorm } = req.body
            const posts = await Post.findAll({
                where: 
                {
                    dorm: dorm
                }
            })
            res.send(posts)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке извлечь посты.'
            })
        }
    },
    async getPosts (req, res) {
        try {
            const { dorm, telegram } = req.body
            const posts = await Post.findAll({
                where: 
                {
                    dorm: dorm,
                    author_t: telegram,
                }
            })
            res.send(posts)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке извлечь посты.'
            })
        }
    },
    async post (req, res) {
        try {
            if (req.body.author_t === null) {
                return res.status(403).send({
                    error: 'Сначала укажите логин Telegram в профиле!'
                })
            }
            const post = await Post.create(req.body)
            res.send(post)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке добавления поста.'
            })
        }
    },
    async deletePost (req, res) {
        try {
            const { id } = req.body

            const post = await Post.destroy({
                where: {
                    id: id
                }
            })
            res.send(post)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке добавления поста.'
            })
        }
    }
}
