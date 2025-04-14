const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const livresPath = path.join(__dirname, '../data/livres.json');
const livres = JSON.parse(fs.readFileSync(livresPath, 'utf8'));

router.get('/', (req, res) => {
  res.json(livres);
});

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = livres.find(b => b.id === bookId);
  
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Livre non trouvé');
  }
});

router.post('/ajout-livre', (req, res) => {
  res.json({
    message: 'Livre ajouté avec succès !',
    livre: {
      id: livres.length + 1,
      titre: "Nouveau Livre",
      auteur: "Auteur Inconnu",
      genre: "Genre Inconnu",
      annee: 2025
    }
  });
});

router.get('/recherche-livre/auteur/:auteur', (req, res) => {
  const auteur = req.params.auteur.toLowerCase();
  const booksByAuthor = livres.filter(b => b.auteur.toLowerCase().includes(auteur));

  if (booksByAuthor.length > 0) {
    res.json(booksByAuthor);
  } else {
    res.status(404).send('Aucun livre trouvé pour cet auteur');
  }
});

module.exports = router;
