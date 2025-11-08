// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Importação dos módulos necessários
const express = require("express");
const productsRoutes = require("./src/routes/products");
const categoriesRoutes = require("./src/routes/categories");
const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth")
const cors = require("cors")
require("./src/models")

// Inicialização do aplicativo Express
const app = express();

// Definição da porta do servidor, com um valor padrão
const PORT = process.env.PORT || 3000;

// Middlewares
// Habilita o parsing de JSON no corpo das requisições
app.use(express.json());
app.use(cors())

// Rotas
// Define o uso das rotas de produtos
app.use(productsRoutes);

app.use(categoriesRoutes);

app.use(usersRoutes);

app.use(authRoutes)


// Inicialização do Servidor
// O servidor começa a escutar as requisições na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});