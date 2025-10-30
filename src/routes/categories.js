const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories");
const categoriesMiddlewares = require("../middlewares/categories");

router.post("/categories", categoriesMiddlewares.validateInsertCategories, categoriesController.insertCategory);

module.exports = router;