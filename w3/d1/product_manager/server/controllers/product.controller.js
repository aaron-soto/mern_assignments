const { Product } = require("../models/product.model");
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World",
    });
};

module.exports.createProduct = (request, response) => {
    const { name, price, desc } = request.body;
    Product.create({
        name,
        price,
        desc,
    })
        .then((product) => response.json(product))
        .catch((err) => response.json(err));
};

module.exports.getAll = (request, response) => {
    Product.find({})
        .then((products) => response.json(products))
        .catch((err) => response.json(err));
};

module.exports.getOne = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then((products) => {
            console.log(products);
            response.json(products);
        })
        .catch((err) => response.json(err));
};

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
        runValidators: true,
    })
        .then((updatedProduct) => response.json(updatedProduct))
        .catch((err) => response.json(err));
};
