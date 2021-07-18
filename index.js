import express from 'express'
import mongoose from 'mongoose'

import api from './routes/api.js'

const app = express()
app.use(express.json())

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, () => console.log('Server is running'))

mongoose.connect('mongodb://localhost/notes', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}).then((db, err) => err ? console.log(err) : console.log('Connected to DB'))

app.use('/api', api)