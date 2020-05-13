const express = require('express')
const app = express()
const Animal = require('../models/Animal')
const router = express.Router()

router.get('/', (req, res) =>{
    console.log(`/GET mascotas ---> ALL`)
    Animal.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) =>{
    console.log(`/GET mascotas --->${req.params.id}`)
    Animal.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) =>{
    console.log(`/POST mascotas --->${req}`)
    Animal.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) =>{
    console.log(`/PUT mascotas --->${req.params.id}`)
    Animal.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) =>{
    console.log(`/DELETE mascotas --->${req.params.id}`)
    Animal.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => resp.sendStatus(204))
})



module.exports = router