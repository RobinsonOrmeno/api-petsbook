const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const usuariosmascotas = require('./routes/usuariomascotas')
const usuarios = require('./routes/usuarios')
const mascotas = require('./routes/mascotas')

app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser : true, useUnifiedTopology : true})
mongoose.set('useFindAndModify', false);



app.use('/api/usuariosmascotas', usuariosmascotas)
app.use('/api/usuarios', usuarios)
app.use('/api/mascotas', mascotas)




module.exports = app