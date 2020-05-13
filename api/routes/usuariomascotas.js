const express = require('express')
const app = express()
const UsuarioMascotas = require('../models/UsuarioMascotas')
const router = express.Router()

router.get('/', (req, res) =>{
    console.log(`/GET usuariomascotas ---> ALL`)
    UsuarioMascotas.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) =>{
    console.log(`/GET usuariomascotas --->${req.params.id}`)
    UsuarioMascotas.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})


router.post('/', (req, res) =>{
    console.log(`/POST usuariomascotas --->${req}`)
    UsuarioMascotas.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) =>{
    console.log(`/PUT usuariomascotas --->${req.params.id}`)
    UsuarioMascotas.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) =>{
    console.log(`/DELETE usuariomascotas --->${req.params.id}`)
    UsuarioMascotas.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => resp.sendStatus(204))
})



module.exports = router