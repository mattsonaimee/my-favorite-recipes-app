const db = require('../models');

module.exports = (app) => {
  app.get('/api/recipes', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
      console.log(query.UserId);
    }
    db.Recipe.findAll({
      where: query,
      include: [db.User, db.Image]
    }).then((dbRecipe) => {
      console.log(`Here is the findAll DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });

  app.get('/api/recipes/:id', (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User, db.Image]
    }).then((dbRecipe) => {
      console.log(`Here is the findOne DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });

  app.post('/api/recipes', (req, res) => {
    db.Recipe.create(req.body).then((dbRecipe) => {
      console.log(`Here is the Delete DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });

  app.delete('/api/recipes/:id', (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbRecipe) => {
      console.log(`Here is the Delete DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });

  app.put('/api/recipes', (req, res) => {
    db.Recipe.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((dbRecipe) => {
      console.log(`Here is the Update DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });
};
