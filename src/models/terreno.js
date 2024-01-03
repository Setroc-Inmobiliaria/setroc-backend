const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Terreno = sequelize.define('Terreno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    serviciosBasicos: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costoTotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enganche: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    costoEnganche: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    facilidadesPago: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false
    }

})

module.exports = Terreno