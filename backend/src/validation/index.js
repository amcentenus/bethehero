const { Joi } = require('celebrate');

const createOng = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().min(10).max(11).pattern(/^[0-9]+$/),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
};

const createIncident = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required().precision(2).positive()
  }),
  headers: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
};

const listIncidentsByOng = {
  params: Joi.object().keys({
    ong_id: Joi.string().required()
  })
};

const listIcidents = {
  query: Joi.object().keys({
    page: Joi.number().default(1)
  })
};

const deleteIncident = {
  params: Joi.object().keys({
    id: Joi.number().required().positive().greater(0)
  }),
  headers: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
};

module.exports = { createOng, createIncident, listIncidentsByOng, listIcidents, deleteIncident }
