const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'Эта электронная почта уже занята'
            })
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'Вводимые для входа данные были неверными!'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Вводимые для входа данные были неверными!'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке входа в систему.'
            })
        }
    },
    async update (req, res) {
        try {
            const {name, nameT, dorm, email, password, hometown, bithdate, room, id} = req.body

            const currUser = await User.findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
            
            if (name) currUser.name = name
            if (nameT) currUser.telegram = nameT
            if (dorm) currUser.dorm = dorm
            if (email) currUser.email = email
            if (password) currUser.password = password
            if (hometown) currUser.hometown = hometown
            if (bithdate) currUser.bithdate = bithdate
            if (room) currUser.room = room

            const userJson = currUser.toJSON()

            currUser.save().then(function(){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            }).catch(function(){
                res.status(503).send({
                    error: 'Произошла ошибка при попытке обновления системы.'
                })
            });
        } catch (error) {
            res.status(500).send({
                error: 'Произошла ошибка при обработке введённых данных.'
            })
        }
    },
    async uploadImage (req, res) {
        try {
            const {photo, id} = req.body

            const currUser = await User.findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
            
            var binaryData = [];
            binaryData.push(photo);
            currUser.photo = new Blob(binaryData)

            const userJson = currUser.toJSON()

            currUser.save().then(function(){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            }).catch(function(){
                res.status(503).send({
                    error: 'Произошла ошибка при попытке обновления системы.'
                })
            });
        } catch (error) {
            res.status(500).send({
                error: 'Произошла ошибка при обработке введённых данных.'
            })
        }
    }
}
