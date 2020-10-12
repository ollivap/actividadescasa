const express = require('express');
const router = express.Router();

router.get('/actividades', (req, res) => {

  //console.log(puntosH);
  res.render('actividades', { title: 'Actividades hogar'});
});

module.exports = router;
