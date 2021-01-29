const express = require('express');
const router = express.Router();
const dietsCtrl = require('../controllers/diets');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, dietsCtrl.index);
router.get('/new', isAuthenticated, dietsCtrl.new);
router.post('/', isAuthenticated, dietsCtrl.create);
router.get('/:id', isAuthenticated, dietsCtrl.show);
router.post('/:id/meals', isAuthenticated, dietsCtrl.addMeals);
router.delete('/:id', dietsCtrl.delete);
router.get('/:id/edit', isAuthenticated, dietsCtrl.edit)
router.put('/:id',isAuthenticated, dietsCtrl.update);
module.exports = router;