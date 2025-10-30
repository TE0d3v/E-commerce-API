const sequelize = require("../config/database")
const { DataTypes } = require("sequelize")

const productsImages = sequelize.define("ProductsImages", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Products",
            key: "id"
        }
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    }

})

module.exports = productsImages;

//encurtador de URL