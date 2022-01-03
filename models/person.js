require('dotenv').config()
const uniqueValidator = require('mongoose-unique-validator')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

module.exports = Person

/* koodia tehtävän 3.12 kokeiluja varten, haetaan salasana .env tiedostosta varten
if (process.argv.length === 2) {
    console.log('Phonebook:')
    Person.find({}).then(res => {
        res.forEach(person => {
            console.log(`${person.name} number ${person.number}`)
        })
        mongoose.connection.close()
        process.exit(1)
    })
}

if (process.argv.length>3) {
    const newPerson = new Person({
        name : process.argv[2],
        number : process.argv[3]
    })

    newPerson.save().then(res => {
        console.log(`added ${process.argv[2]} number ${process.argv[3]} to phonebook`)
        mongoose.connection.close()
        process.exit(1)
    })
}
 */