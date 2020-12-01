const Meal = require('../models/meal');
const Diet = require('../models/diet');

module.exports = {
    new: newMeal,
    create,
};

function newMeal(req, res) {
    res.render('meals/new', {
        dietId: req.params.id
    });
}

function create(req, res) {
    req.body.diet = req.params.id;
    req.body.createdBy = req.user._id;
    Meal.create(req.body, function(err, meal) {
        res.redirect(`/diets/${req.body.diet}`)
    })
}