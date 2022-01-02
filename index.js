const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

morgan.token('postdata', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))


let persons = [
    {
        'id' : 1,
        'name' : "Arto Hellas",
        'number' : "040-123456"
    },
    {
        'id' : 2,
        'name' : "Pirjo Hellas",
        'number' : "040-234567"
    },
    {
        'id' : 3,
        'name' : "Eino Hellas",
        'number' : "040-123245"
    },
    {
        'id' : 4,
        'name' : "Jaksa Hellas",
        'number' : "040-523245"
    }
]


app.get('/api/persons',  (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    
    if (!body.name || !body.number) {
        return res.status(400).json({
            error:'content missing'
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error:'username already in use'
        })
    }

    const person = {
        name: body.name,
        id: Math.floor((Math.random() * (10000000 - 1) + 1)),
        number: body.number
    }

    persons.concat(person)

    res.json(body)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.get('/api/info', (req, res) => {
    let date = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people </p>\n\n${date}`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})