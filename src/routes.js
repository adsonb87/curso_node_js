const { Router, response } = require('express');
const DevController = require('./controllers/Devcontroller');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', DevController.index);

module.exports = routes;