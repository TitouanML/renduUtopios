const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use(express.json());
app.use(express.static('public'));

app.use('/livres', routes.bookRoutes);
app.use('/utilisateurs', routes.userRoutes);
app.use('/', routes.generalRoutes);

app.listen(port, () => {
  console.log(`Serveur Express démarré sur http://localhost:${port}`);
});
