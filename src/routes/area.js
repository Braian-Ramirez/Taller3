const area = require("../models/area");

const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
const areaSchema = require("../models/area");

//areas

router.post("/areas", (req, res) =>{
    const area = areaSchema(req.body);
    area
        .save().then((data)=>{
        res.json(data)
    }).catch((error)=> res.send(error));
});

//Modificar los datos de un area para agregar un usuario

router.put("/areas/:id", async(req, res)=>{
    const {id} = req.params;
    const usuario = usuarioSchema(req.body);
    var idUsuario = null;


    const usuarioConsulta = await usuarioSchema.findOne({codigo: req.body.codigo});
    if (!usuarioConsulta){
        await usuario.save().then((datausuario)  => {
            idUsuario = dataUsuario._id;
        });
    }else{
        idUsuario= usuarioConsulta._id;
    }

    areaSchema
        .updateOne({_id: id}, {
            //$push >> agrega un nuevo elemento sin importar si ya existe
            // $addToSet >> agrega un nuevo elemento sin repetirlo
            $addToSet: {usuarios: idUsuario}
        })
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}));

});
module.exports = router;

