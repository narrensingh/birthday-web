const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // name is required
  },
  birthdate: {
    type: Date,
    required: true, // birthdate is required
  },
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

module.exports = Birthday;
