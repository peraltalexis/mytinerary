const joi = require ("joi")

const validator = (req, res, next) => {
    console.log(req.body.nuevoUsuario)
    const Schema = joi.object({
        firstname: joi.string().max(12).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"Name must contain at least 3 characters",
            "string.empty":"Field cannot be empty"
        }),
        lastname: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"Lastname must contain at least 3 characters",
            "string.empty":"Field cannot be empty"
        }),
        email: joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"Invalid email format"
        }),
        password: joi.string().max(30).min(6).trim().pattern(new RegExp("[a-zA-Z0-9]")).required().messages({
            "string.min":"Password must contain at least 6 characters",
            "string.pattern":"The password must contain letters and numbers"
        }),
    })
    const validation = Schema.validate(req.body.nuevoUsuario,{abortEarly:false})
    if(validation.error){
        return res.json({success:"falseVAL", Response:validation})
    }
    next()
}

module.exports = validator