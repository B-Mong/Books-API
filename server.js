// Configuration
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongodb:', process.env.MONGO_URI) }
)


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Books!')
});

// Listen
app.listen(PORT, () => {
    console.log('Reading at port:', PORT)
})

// Controllers
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// 404 Page Not Found
app.get('*', (req, res) => {
    res.send('404')
})