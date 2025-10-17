const productsModel = require("../models/products")
async function insertProduct(req, res) {
    try {
        await productsModel.insertProduct(req.body)

        return res.status(201).send({
            message: "Produto criado com sucesso"
        })
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}
// se existe erro no controler dentro de um catch  conta como erro de servidor por isso o status 500

async function getAllProducts(req, res) {
    try {
        const products = await productsModel.getAllProducts()

        return res.send( products )
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    insertProduct,
    getAllProducts
}