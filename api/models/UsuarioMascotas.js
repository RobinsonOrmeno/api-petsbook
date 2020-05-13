const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioMascotas = mongoose.model('UsuarioMascotas', new Schema({
  
    nombre: String,
    tipoAnimal : { type: Schema.Types.ObjectId, ref: 'Animal'} ,
    raza : String,
    fotoUrl : String
}))


module.exports = UsuarioMascotas