const Categories = require("../models/categories");

async function insertCategory(req, res){
    try {
        await Categories.create(req.body)

        return  res.status(201).send({
            message: "Categoria criada com sucesso"
        })
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    insertCategory
};

// mandar erros mapeados para o frontend nunca é uma boa ideia somente em situações específicas