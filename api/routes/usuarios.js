const express = require('express')
const app = express()
const Usuarios = require('../models/Usuario')

const router = express.Router()
//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) =>{
    console.log(`/GET usuarios ---> ALL`)
    Usuarios.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) =>{
    console.log(`/GET usuarios --->${req.params.id}`)
    Usuarios.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) =>{
    console.log(`/POST usuarios --->${req}`)
    Usuarios.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) =>{
    console.log(`/PUT usuarios --->${req.params.id}`)
    Usuarios.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) =>{
    console.log(`/DELETE usuarios --->${req.params.id}`)
    Usuarios.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => resp.sendStatus(204))
})

module.exports = router