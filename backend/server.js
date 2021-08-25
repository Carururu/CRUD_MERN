const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('Mongodb connection established successfully')
})

const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err)
    } else {
      res.json(todos)
    }
  })
})

app.post('/create', (req, res) => {
  const todo = new Todo(req.body)
  todo
    .save()
    .then((todo) => {
      res.json(todo)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  Todo.findById(id, (err, todo) => {
    res.json(todo)
  })
})

app.patch('/:id', async (req, res) => {
  const id = req.params.id
  let todo = await Todo.findByIdAndUpdate(id, req.body)
  res.json(id)
})

app.delete('/:id', async (req, res) => {
  const id = req.params.id
  await Todo.findByIdAndDelete(id)
  res.end()
})

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
