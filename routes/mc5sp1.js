var express = require('express');
var router = express.Router();

var circuit;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(circuit)
});

router.post('/', function(req, res, next) {
  circuit = req.body
  res.status(200).json("Adicionado com sucesso!")
}
);

module.exports = router;
