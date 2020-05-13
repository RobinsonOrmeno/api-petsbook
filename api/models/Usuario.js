const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = mongoose.model('Usuario', new Schema({
    nombre: String,
    email: String,
    tipoRegistro: String,
    fechaRegistro: String,
    estado: Number 
}))


module.exports = Usuario