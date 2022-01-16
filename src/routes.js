const { Router, response } = require('express');
const DevController = require('./controllers/Devcontroller');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;