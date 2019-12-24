const express = require('express');

const routes = express.Router();

const productsController = require('./controllers/ProductController');
//definindo uma nova rota com requisição get e chamando função index do arquivo ProductController
//função cuja funcionalidade é mostrar todos os produtos
routes.get("/products", productsController.index);
//definindo uma nova rota com requisição get e chamando função show
//função cuja funcionalidade  é mostar os produto de acordo com parametro id
routes.get('/products/:id', productsController.show);
//definindo uma nova rota com requisição post e chamando função store do arquivo ProductController
//função cuja funcionalidade é criar um novo produto dentro da collection do mongodb
routes.post('/products', productsController.store);
//definindo uma nova rota com requisição put e chamando função update do arquivo ProductController
//função cuja funcionalidade irá atualizar de acordo com id e de acordo com o que você atualizar
routes.put('/products/:id', productsController.update);

routes.delete('/products/:id', productsController.destroy);
module.exports = routes;