const express = require('express');
const app = express();

app.use(express.json()); // Middleware pour gérer les données JSON dans les requêtes

app.post('/api/data', (req, res) => {
  const postData = req.body; // Récupérer les données POST du corps de la requête
  res.status(200).json(postData); // Renvoyer les données POST
});

module.exports = app;

