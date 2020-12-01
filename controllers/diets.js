const Diet = require('../models/diet');
const Nutrient = require('../models/nutrient');

module.exports = {
    index,
    new: newDiet,
    create,
    show,
    addMeals,
    delete: deleteDiet,
    edit,
    update
};

function index(req, res) {
    Diet.find({}).populate('createdBy').exec(function (err, diets) {
        res.render('diets/index', {
            diets
        });
    });
}

function newDiet(req, res) {
    res.render('diets/new');
}

function create(req, res) {
    req.body.createdBy = req.user._id;
    Diet.create(req.body, function (err, diet) {
        res.redirect('/diets');
    });
}

function show(req, res) {
    Diet.findById(req.params.id)
        .populate('createdBy').populate('meals.createdBy').exec(function (err, diet) {
            Nutrient.find({
                diet: diet._id
            }).populate('createdBy').exec(function (err, nutrients) {
                console.log(diet, nutrients)
                res.render('diets/show', {
                    diet,
                    nutrients
                });
            })
        });
}

function addMeals(req, res) {
    Diet.findById(req.params.id, function (err, diet) {
        req.body.createdBy = req.user._id;
        diet.meals.push(req.body);
        diet.save(function (err) {
            res.redirect(`/diets/${diet._id}`);
        });
    });
}

function deleteDiet(req, res) {
    Diet.findByIdAndDelete(req.params.id, function (err, diet) {
        console.log(diet);
    });
}

function edit(req, res) {
    Diet.findById(req.params.id, function (err, diet) {
        res.render('diets/edit', {
            dietId: req.params.id,
            diet
        })
    })
}

function update(req, res) {
    Diet.findByIdAndUpdate(req.params.id, { 
        new: true,
        name: req.body.name,
        dietType: req.body.dietType,
        startDate: req.body.startDate
    } ,
    function (err, diet) {
        console.log(diet);
    })
    res.redirect('/diets')
}