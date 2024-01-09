const {Sequelize} = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()

const sequelize = new Sequelize({
    database: "setroc",
    username:"postgres",
    password:process.env.PASSWD,
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize 