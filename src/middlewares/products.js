const { upload } = require("../config/aws-s3");
const { Categories } = require("../models");

// async function processImageUpload(req, res) {
//     return new Promise((resolve, rejected) => {
//         upload.single("image")(req, res, (err) => {
//             if (err) {
//                 rejected(err);
//             } else {
//                 resolve()
//             }
//         })
//     })
// }

async function validateInsertProduct(req, res, next) {

    // try {
    //     await processImageUpload(req, res)

    //     if(req.file && req.file.location){
    //         req.body.image_url = req.file.location
    //     }
    // } catch (error) {
    //     return res.status(500).send({
    //         error: error.message // "erro ao fazer upload da imagem"
    //     })
    // }

    const {
        name,
        price,
        category_id,
        shipping,
        warranty,
        return_policy
    } = req.body;

    if (!name || !price || !category_id | !shipping || !warranty || !return_policy) {
        return res.status(400).send({
            error: "Todos os campos são obrigatórios"
        })
    }

    if (name.length > 255) {
        return res.status(400).send({
            error: "Nome não pode ter mais de 255 caracteres"
        })
    }

    try {
        const category = await Categories.findByPk(category_id)

        if (!category) {
            return res.status(400).send({
                error: "Categoria não encontrada"
            })
        }
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }

    req.body.return = return_policy

    next()
}

module.exports = {
    validateInsertProduct
}

// async function validateInsertProduct(req, res, next) {
//     const { name, category, price } = req.body;

//     if (!name || !category || !price) {
//         return res.status(400).send({
//             error: "Nome, Categoria e Preço são obrigatórios"
//         })
//     }

//     if (category.length > 255) {
//         return res.status(400).send({
//             error: "Categoria não pode ter mais de 255 caracteres"
//         })
//     }

//     next()
// }

// module.exports = { validateInsertProduct }