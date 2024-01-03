const express = require("express");
const Terreno = require("../models/terreno");
const router = express.Router()

router.get("/", async (req, res) => {
    // res.status(200).send("todo good")
    try {
        const terrenos = await Terreno.findAll()
        res.status(200).json(terrenos)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

router.post("/nuevo-terreno", async (req, res) => {
    const { estado, municipio, nombre, descripcion, serviciosBasicos, costoTotal, enganche, costoEnganche, facilidadesPago, ubicacion } = req.body;
    try {
        const terrenos = await Terreno.findAll()
        const existTerreno = terrenos.find(terreno => terreno.nombre === nombre)
        if (existTerreno) {
            res.status(400).json({ msg: "Este terreno ya se encuentra en tu lista de terrenos" })
        } else {
            const nuevoTerreno = await Terreno.create({ estado, nombre, municipio, descripcion, serviciosBasicos, costoTotal, costoEnganche, enganche, facilidadesPago, ubicacion });
            res.status(201).json({ nuevoTerreno });
        }

    } catch (error) {
        console.error('Error al crear el terreno:', error);
        res.status(500).json({ error: 'Hubo un problema al crear el terreno' });
    }
});

module.exports = router;