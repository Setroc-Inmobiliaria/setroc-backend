const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    database: "setroc",
    username:"postgres",
    password:"1234",
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize