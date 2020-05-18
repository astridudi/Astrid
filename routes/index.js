const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.render('index', {
    nombreUsuario: req.query.nombreUsuario
  });
});

module.exports = router;
