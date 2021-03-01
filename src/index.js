const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = 8000

// Routes
const taskRoutes = require('./routes/tasks')
const habitRoutes = require('./routes/habits')
const quoteRoutes = require('./routes/quotes')

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/tasks', taskRoutes)

app.use('/habits', habitRoutes)

app.use('/quotes', quoteRoutes)


// Listener
app.listen(port, () => {
    mongoose.connect(
        'mongodb://localhost:27017/nwtn',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => { console.log('>>> CONNECTED TO DB') })
        .catch((e) => { console.log(e) })

    console.log(`>>> Backend listening at http://localhost:${port}`)
})