import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  note: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Note', schema)