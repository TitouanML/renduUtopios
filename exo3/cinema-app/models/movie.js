const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);