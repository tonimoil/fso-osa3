const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

morgan.token('postdata', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }

    next(error)
}

app.get('/api/persons',  (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
    }).catch(error => {
        next(error)
    })
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    
    const person = new Person ({
        name: String(body.name),
        number: String(body.number)
    })

    person.save()
        .then(savedPerson => {
            res.json(savedPerson)
        })
        .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
        name : body.name,
        number : body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, {new : true, runValidators : true})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(err => next(err))
})

app.get('/api/info', (req, res) => {
    let date = new Date()
    Person.find({}).then(persons => {
        res.send(`<p>Phonebook has info for ${persons.length} people </p>\n\n${date}`)
    })
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
