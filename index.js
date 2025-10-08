const express = require('express');
const app = express();

app.use(express.json())

const PORT = 1000;
const products = []

app.get("/", (req, res) => {
    res.send("Olá Pedro");
});

app.post("/products", (req, res) => {
    // descontruçaõ.
    const { name, category, price } = req.body;
    // extrai do corpo da requisição as informações que quero.

    products.push({ name, category, price })


    res.status(201).send({
        message: "produto cadastrado com sucesso"
    })
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});