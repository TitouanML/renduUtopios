const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.post('/', async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.get('/search', async (req, res) => {
  const { title } = req.query;
  const movie = await Movie.findOne({ title });
  if (!movie) return res.status(404).json({ error: 'Film non trouvé' });
  res.json(movie);
});

router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!movie) return res.status(404).json({ error: 'Film non trouvé' });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Movie.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Film non trouvé' });
    res.json({ message: 'Film supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
