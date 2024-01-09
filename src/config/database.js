const {Sequelize} = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()

const sequelize = new Sequelize({
    database: "setroc",
    username:"setroc",
    password:process.env.PASSWD,
    host: "dpg-cme98nmn7f5s73fom7q0-a",
    dialect: "postgres"
})

module.exports = sequelize 