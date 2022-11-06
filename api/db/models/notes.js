const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true
    },
    
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Notes = mongoose.model('notes', NotesSchema);
  module.exports = Notes;