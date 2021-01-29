const express = require('express');
const router = express.Router();
const nutrientsCtrl = require('../controllers/nutrients');
const isAuthenticated = require('../utils/authorization');


router.get('/diets/:id/nutrients/new', isAuthenticated, nutrientsCtrl.new);
router.post('/diets/:id/nutrients', isAuthenticated, nutrientsCtrl.create);

module.exports = router;
