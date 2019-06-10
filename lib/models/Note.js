const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 128,
    required: true
  },
  body: {
    type: String,
    minlength: 1,
    maxlength: 420,
    required: true
  }
});

module.exports = mongoose.model('Note', noteSchema);
