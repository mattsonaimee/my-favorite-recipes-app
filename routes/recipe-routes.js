const db = require('../models');

module.exports = (app) => {
    app.get('/api/recipes', (req, res) => {
        db.Recipe.findAll({
            include: [db.Image],
        }).then((dbRecipe) => res.json(dbRecipe));
    });

    app.get('/api/recipes/:id', (req, res) => {
        db.Recipe.findOne({
            where: {
                id: req.params.id,
            },
            include: [db.Image],
        }).then((dbRecipe) => res.json(dbRecipe));
    });

    app.post('/api/recipes', (req, res) => {
        db.Recipe.create(req.body).then((dbRecipe) => res.json(dbRecipe));
    });

    app.delete('/api/recipes/:id', (req, res) => {
        db.Recipe.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbRecipe) => res.json(dbRecipe))
    });

    app.put('/api/recipes', (req, res) => {
        db.Recipe.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbRecipe) => res.json(dbRecipe));
    })
};