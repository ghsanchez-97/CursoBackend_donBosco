import Joi from 'joi'

const authSchemas = {
  signup: Joi.object({
    email: Joi.string().max(100).email().required(),
    password: Joi.string().min(8).max(15).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/).required(),
    prefix: Joi.string().regex(/^\(?\+\d{3}\)?$/).required(),
    phone: Joi.string().regex(/^[1-9][0-9]{6,15}$/).required()
  })
}

export default authSchemas
