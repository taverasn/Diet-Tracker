const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const isAuthenticated = require('../utils/authorization');


router.get('/diets/:id/meals/new', isAuthenticated, mealsCtrl.new);
router.post('/diets/:id/meals', isAuthenticated, mealsCtrl.create);

module.exports = router;