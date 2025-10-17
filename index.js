// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Importação dos módulos necessários
const express = require("express");
const productsRoutes = require("./src/routes/products");

// Inicialização do aplicativo Express
const app = express();

// Definição da porta do servidor, com um valor padrão
const PORT = process.env.PORT || 3000;

// Middlewares
// Habilita o parsing de JSON no corpo das requisições
app.use(express.json());

// Rotas
// Define o uso das rotas de produtos
app.use(productsRoutes);

// Inicialização do Servidor
// O servidor começa a escutar as requisições na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});