const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie");

const app = express();
app.use(express.json());


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/healthcheck', (req, res) => {
  res.send('Hello World!');
})

app.use("/movies", movieRoutes);

app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});

