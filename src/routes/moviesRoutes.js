const express = require('express');
const router = express.Router();
const {list,newest,recomended,getById,create,update,destroy} = require('../controllers/moviesController');

router.get('/', list);
router.get('/new', newest);
router.get('/recommended', recomended);
router.get('/:id', getById);
//Rutas exigidas para la creación del CRUD

router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;