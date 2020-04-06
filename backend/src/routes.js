const express = require('express');
const routes = express.Router();

const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, res) => { 
  res.json("Server started at port 3333")
});

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/ongs/:ong_id/incidents', IncidentsController.show);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.destroy);

module.exports = routes;