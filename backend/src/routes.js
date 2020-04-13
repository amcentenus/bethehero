const express = require('express');
const routes = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');

const Validation = require('./validation');

const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, res) => { 
  res.json("Server started at port 3333")
});

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', celebrate(Validation.createOng) ,OngsController.store);

routes.get('/ongs/:ong_id/incidents', celebrate(Validation.listIncidentsByOng), IncidentsController.show);

routes.get('/incidents',celebrate(Validation.listIcidents), IncidentsController.index);
routes.post('/incidents', celebrate(Validation.createIncident), IncidentsController.store);
routes.delete('/incidents/:id',celebrate(Validation.deleteIncident), IncidentsController.destroy);

module.exports = routes;