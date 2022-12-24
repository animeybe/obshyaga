const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            name: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(32).alphanum().required()
        })

        const {error , value} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Вы должны указать действительный адрес элетронной почты.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Вы должны указать пароль в верном формате.
                        <br>
                        1. Пароль должен содержать ТОЛЬКО следующие символы: строчные, прописные, цифры.
                        <br>
                        2. Пароль должен содержать не менее 8 символов и не более 32 символов в длину.
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Неверная данные регистрации'
                    })
                    break
            }
        } else {
            next()
        }
    }
}
