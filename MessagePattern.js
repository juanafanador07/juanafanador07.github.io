const Joi = require('joi');
const JoiMessageSchema = Joi.object({
    name: Joi.string().min(3).max(255).pattern(/^[a-zA-Z ]+$/).required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
    script: Joi.string().valid('true', 'false').required(),
    honey: Joi.string().valid('').required()
});

function manageError(error) {
    const json = {
        error: true
    };
    let path = error.details[0].path[0];
    switch (path) {
        case "name":
            path = "nombre";
            break;
        case "email":
            path = "correo";
            break;
        case "message":
            path = "mensaje";
            break;
    }

    const type = error.details[0].type;

    switch (type) {
        case "string.min":
            json.status = `El ${path} debe tener al menos ${error.details[0].context.limit} carácteres`
            break;
        case "string.max":
            json.status = `El ${path} no puede tener más de ${error.details[0].context.limit} carácteres`
            break;
        case "string.pattern.base":
            json.status = `El ${path} contiene carácteres inválidos`
            break;
        case "string.email":
            json.status = `El ${path} no es válido`
            break;
        case "string.empty":
            json.status = `El ${path} no puede estar vacío`
            break;
        default:
            json.status = error.details[0].message;
            break
    }
    return json
}
module.exports = {
    schema: JoiMessageSchema,
    manageError
};