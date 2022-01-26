const Joi = require("@hapi/joi");

const registerValidate = data => {
    const schema = Joi.object({
        password: Joi.string().required().min(6),
        email: Joi.string().required()
    })

    return schema.validate(data)
}

const loginValidate = data => {
    const schema = Joi.object({
        password: Joi.string().required().min(6),
        email: Joi.string().required()
    })

    return schema.validate(data)
}

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;