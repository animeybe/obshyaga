const {Post} = require('../models')
const {User} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const posts = await Post.findAll({
                limit: 10
            })
            res.send(posts)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке извлечь посты.'
            })
        }
    },
    async posts (req, res) {
        try {
            const posts = await Post.create(req.body)
            res.send(posts)
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке создать таблицу постов.'
            })
        }
    }
}
