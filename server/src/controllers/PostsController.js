const {Post} = require('../models')
const {User} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const { dorm } = req.body
            const posts = await Post.findAll({
                where: 
                {
                    dorm: dorm
                },
                limit: 10
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
            const post = await Post.create(req.body)
            res.send(post)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке создать таблицу постов.'
            })
        }
    },
    async getAuthorName (req, res) {
        try {
            await User.findOne({
                where: {
                    id: req.body.id
                }
            }).then(author => res.json(author))
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке извлечь посты.'
            })
        }
    }
}
