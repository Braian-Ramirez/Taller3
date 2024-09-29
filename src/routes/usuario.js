const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
//Nuevo usuario
router.post("/usuarios", (req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//actualizar datos
router.put("/usuario/:id", (req, res) =>{
    const { id } = req.params;
    const { nombre, edad, facultad, carrera, tipo_usuario, fecha_inicio, codigo} = req.body;
    usuarioSchema
        .updateOne({_id:id}, { $set: { nombre, edad, facultad, carrera, tipo_usuario, fecha_inicio, codigo}
        })
        .then ((data) => res.json(data))
        .catch ((error) => res.json({message:error}));
});
//Buscar usuario
router.get("/usuario", (req, res) => {
    usuarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));

});
//borrar usuario
router.delete("/usuario/:id", (req, res) =>{
    const { id } = req.params;
    const {  nombre, edad, facultad, carrera, tipo_usuario, fecha_inicio, codigo} = req.body;
    usuarioSchema
        .deleteOne({_id:id}, { $set: { nombre, edad, facultad, carrera, tipo_usuario, fecha_inicio, codigo}
        })
        .then ((data) => res.json(data))
        .catch ((error) => res.json({message:error}));
});
module.exports = router;
