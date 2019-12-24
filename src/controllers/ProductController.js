const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        //retorna os dados da collection Products do mongodb em forma de json
        const products = await Product.paginate({

        }, {page, limit: 10});
        return res.json(products);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        //cria uma variavel product que irá passar o corpo da requisição
        const product = await Product.create(req.body);
        // retorna o mesma requisição em forma de json
        return res.json(product);
    },

    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}