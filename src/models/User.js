const DataTypes = require('sequelize');
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    phoneNum: {
        type: DataTypes.STRING,
    }
});

User.associate = function (models) {
    User.hasMany(models.Product);
}

module.exports =  User;