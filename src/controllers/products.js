const { uploadAndSaveProductsImages } = require("../helpers/product-images-upload")
const { Products } = require("../models")

async function insertProduct(req, res) {
    try {
        const productData = {
            ...req.body
        }

        const product = await Products.create(productData)

        let images = [];
        try {
            images = await uploadAndSaveProductsImages(product.id, req.files)
        } catch (error) {
            console.error("Erro ao upload das imagens", error.message)
        }

        return res.status(201).send({
            message: "Produto criado com sucesso",
            images: images.map(img => ({
                url: img.url
            }))
        })
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}
// se existe erro no controler dentro de um catch  conta como erro de servidor por isso o status 500

module.exports = {
    insertProduct
}