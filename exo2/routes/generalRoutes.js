const express = require('express');
const router = express.Router();

router.get('/bienvenue', (req, res) => {
  res.send(`<h1>Bienvenue sur Express2000 !</h1>`);
});

router.get('/info', (req, res) => {
  res.json({ nom: "John Doe", age: 42, profession: "Développeur Web" });
});

router.get('/acces-interdit', (req, res) => {
  res.status(403).send('Accès interdit !');
});

router.get('/redirection-accueil', (req, res) => {
  res.redirect('/bienvenue');
});

router.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

module.exports = router;
