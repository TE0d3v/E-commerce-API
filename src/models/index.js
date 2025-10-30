const sequelize = require("../config/database");
const Products = require("../models/products");
const Categories = require("../models/categories");
const ProductsImages = require("../models/products_images");



sequelize.sync({ alter: true})
    .then(() => console.log('tabelas sincronizadas'))
    .catch((error) => console.error('erro ao sincrozinar tabelas', error));

// dando permissão ao sequelize alterar a estruturta do meu banco

module.exports = {
    Products,
    Categories,
    ProductsImages
}