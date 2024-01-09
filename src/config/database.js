const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    database: "setroc",
    username:"postgres",
    password:"azakcth",
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize