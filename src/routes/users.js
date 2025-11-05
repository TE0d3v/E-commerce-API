const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const usersMiddlewares = require("../middlewares/users");

router.post("/users", usersMiddlewares.validateCreateUser, usersController.createUser)

module.exports = router;