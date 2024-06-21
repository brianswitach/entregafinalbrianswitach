const express = require('express');
const router = express.Router();

// Definir tus endpoints aquí
router.get('/', (req, res) => {
  res.send('Lista de carritos');
});

module.exports = router;
