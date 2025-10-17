require("dotenv").config()

const pg = require("pg")
const db = new pg.Pool({
    connectionString: process.env.DB_URI
})

module.exports = db;