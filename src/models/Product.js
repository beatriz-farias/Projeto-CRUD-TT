const DataTypes = require('sequelize');
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    deliveryType: {
        type: DataTypes.STRING,
    },
    photograph: {
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
});

Product.associate = function (models) {
    Product.belongsTo(models.User);
}

module.exports =  Product;