const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

// Route 1: Liste des utilisateurs
router.get('/', (req, res) => {
  res.json(users);
});

// Route 2: Détails d’un utilisateur
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Utilisateur non trouvé');
  }
});

// Route 3: Ajout d’un utilisateur
router.post('/ajout-utilisateur', (req, res) => {
  const newUser = {
    id: users.length + 1,
    nom: "Nouvel Utilisateur",
    age: 99
  };

  res.json({
    message: 'Utilisateur ajouté avec succès !',
    utilisateur: newUser
  });
});

// Route 4: Recherche par nom
router.get('/recherche-utilisateur/nom/:nom', (req, res) => {
  const nom = req.params.nom.toLowerCase();
  const results = users.filter(u => u.nom.toLowerCase().includes(nom));

  if (results.length > 0) {
    res.json(results);
  } else {
    res.status(404).send('Aucun utilisateur trouvé');
  }
});

module.exports = router;
