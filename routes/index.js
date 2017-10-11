var express = require('express');
var router = express.Router();

var objects = []

/* GET home page. */
router.get('/',
  //retornar a lista
  function(req, res, next) {
      res.status(200).json(objects);
  }
);

router.post('/create',
  function(req, res, next) {
    objects.push(req.body.object)
    res.status(200).json("Adicionado com sucesso!")
  }
)

router.post('/update',
  //receber o indice que deve ser alterado e o item
  function(req, res, next) {
    objects[req.body.index] = req.body.object
    res.status(200).json("Alterado com sucesso!")
  }
)

router.delete("/",
  //receber o indce que será deletado
  function(req, res, next) {
    var answer = ''
    var index = objects.indexOf(req.body.object)
    if (index > -1){
      objects.splice(index,1)
      answer = 'Removido com sucesso'
    } else {
      answer = 'Objeto não encontrado'
    }
    res.status(200).json(answer)
  }
)

module.exports = router;
