const mongoose = require("mongoose");

const areaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: [{ type: mongoose.Schema.Types.ObjectId, ref: 'usuario'}]
});
module.exports = mongoose.model('Area', areaSchema);