const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Animal = mongoose.model('Animal', new Schema({
    nombre: String
}))

module.exports = Animal