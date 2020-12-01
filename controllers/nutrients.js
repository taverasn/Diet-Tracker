const Nutrient = require('../models/nutrient');
const Diet = require('../models/diet');

module.exports = {
    new: newNutrient,
    create,
};

function newNutrient(req, res) {
    res.render('nutrients/new', {
        dietId: req.params.id
    });
}

function create(req, res) {
    req.body.diet = req.params.id;
    req.body.createdBy = req.user._id;
    Nutrient.create(req.body, function(err, nutrient) {
        res.redirect(`/diets/${req.body.diet}`)
    })
}

