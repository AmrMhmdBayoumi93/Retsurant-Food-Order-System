
    

const joi = require("joi");
exports.userValidationRegister = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().lowercase().email().required(),
    password: joi.string(),// add ,pattren(new RegExp('^[a-zA-Z0-9]{3,30}$')), after finishing testing
    role: joi.string().valid("admin", "user"),
})

exports.userValidationlogin = joi.object({
    email: joi.string().lowercase().email().required(),
    password: joi.string(),// add ,pattren(new RegExp('^[a-zA-Z0-9]{3,30}$')), after finishing testing
}) 


