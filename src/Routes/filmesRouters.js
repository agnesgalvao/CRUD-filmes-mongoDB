
const express = require("express");
const controller = require("../Controllers/filmesControllers")

const router = express.Router();

router.get('/', controller.listaFilmes)
router.post('/', controller.addFilme )
router.get('/:id', controller.getFilmeById)
router.patch('/:id', controller.getFilmeById)
router.delete('/:id', controller.deleteById)



module.exports = router