const sequelize = require("../config/database");
const Products = require("./products");
const Categories = require("./categories");
const ProductsImages = require("./products_images");
const Users = require("./users")



sequelize.sync({ alter: true})
    .then(() => console.log('tabelas sincronizadas'))
    .catch((error) => console.error('erro ao sincrozinar tabelas', error));

// dando permissão ao sequelize alterar a estruturta do meu banco

module.exports = {
    Products,
    Categories,
    ProductsImages,
    Users
}