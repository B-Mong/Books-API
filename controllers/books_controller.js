const express = require('express');
const books = express.Router()
const Book = require('../models/books')
const db = require('../models')
const cors = require('cors')
books.use(cors())

// GET
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            console.log(err)
        })
})
// Show/GET Specific book
books.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
        .then(foundBook => {
            res.status(200).json(foundBook)
        })
        .catch(err => {
            console.log(err)
        })
})
// Delete
books.delete('/:id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
        .then(book => {
            console.log('Data was deleted!')
            res.status(204).redirect(`/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
        })
})
// POST Create
books.post('/', (req, res) => {
    db.Book.create(req.body)
        .then(() => {
            res.status(200).redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
})
// PUT/PATCH Update
books.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.param.id, req.body)
        .then(() => {
            res.status(200).redirect(`/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
        })
})
module.exports = books