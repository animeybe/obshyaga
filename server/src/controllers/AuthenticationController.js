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
                error: 'This email account is already in use.'
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
            const {name, dorm, email, password, hometown, bithdate, room, id} = req.body

            const currUser = await User.findOne(
                {
                    where: {
                        id: id
                    }
                }
            )

            currUser.name = name
            currUser.dorm = dorm
            currUser.email = email
            currUser.password = password
            currUser.hometown = hometown
            currUser.bithdate = bithdate
            currUser.room = room

            const userJson = currUser.toJSON()

            currUser.save().then(function(newUser){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            }).catch(function(error){
                res.status(503).send({
                    error: 'Произошла ошибка при попытке обновления системы.'
                })
            });

            currUser.save()
        } catch (error) {
            res.status(500).send({
                error: 'Произошла ошибка при попытке обновления системы.'
            })
        }
    }
}
