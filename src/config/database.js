const {Sequelize} = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()

const sequelize = new Sequelize({
    database: process.env.DB_NAME || "setroc", // Cambiado para usar variable de entorno o valor predeterminado
    username: process.env.DB_USER || "setroc", // Cambiado para usar variable de entorno o valor predeterminado
    password: process.env.DB_PASS || process.env.PASSWD, // Cambiado para usar variable de entorno o valor predeterminado
    host: process.env.DB_HOST || "dpg-cme98nmn7f5s73fom7q0-a", // Cambiado para usar variable de entorno o valor predeterminado
    dialect: "postgres",
})

module.exports = sequelize 