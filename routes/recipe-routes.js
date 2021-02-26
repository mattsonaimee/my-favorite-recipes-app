const db = require('../models');
const passport = require('../config/passport');

module.exports = (app) => {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the app page.
  // Otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), (req, res) =>
    res.json(req.user)
  );

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, '/api/login');
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get('/api/recipes', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Recipe.findAll({
      where: query,
      include: [db.Image]
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
      include: [db.Image]
    }).then((dbRecipe) => {
      console.log(`Here is the findOne DB Recipe ${dbRecipe}`);
      res.json(dbRecipe)
    });
  });

  app.post('/api/recipes', (req, res) => {
    db.Recipe.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      URL: req.body.URL,
      vegetarian: req.body.vegetarian,
      vegan: req.body.vegan,
      gluten_free: req.body.gluten_free,
      favorite_recipe: req.body.favorite_recipe,
      add_to_shopping_list: req.body.add_to_shopping_list
    }).then((dbRecipe) => {
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
