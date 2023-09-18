const Joi = require("joi");

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const createSchema = Joi.object({
    title: Joi.string().required(),
    course: Joi.string().required(),
    topic: Joi.string().required(),
    description: Joi.string().required()
})

exports.validateCreate = validator(createSchema);

