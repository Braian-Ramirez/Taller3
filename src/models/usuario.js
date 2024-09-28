const mongoose = require("mongoose"); // importando el componente mogoose
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    facultad: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    },
    tipo_usuario: {
        type: String,
        required: true,
    },
    fecha_inicio: {
        type: Date,
        required: false,
    },
    codigo: {
        type: Number,
        require: true
    },
});
module.exports = mongoose.model("usuario", usuarioSchema);
