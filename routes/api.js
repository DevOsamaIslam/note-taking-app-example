import express from 'express'
const router = express.Router()
import E from 'http-errors'

import Notes from '../models/note.js'

const findNote = async (req, res, next) => {
  let noteId = req.query.id
  if (noteId)
    req.note = await Notes.findById(noteId)
  next()
}
// GET all notes
router.get('/', async (req, res, next) => res.json(await Notes.find()))

// POST a new note

router.post('/', (req, res) => {
  Notes.create({
    note: req.body.note
  }).then(data => {
    res.json(data)
  })
})

// PATCH an existing note
router.patch('/', findNote, (req, res) => {
  req.note.note = req.body.note
  req.note.save().then(data => res.json(data))
})

// DETETE a note
router.delete('/', findNote, (req, res) => {
  if (req.note)
    req.note.remove()
  res.json({})
})


export default router