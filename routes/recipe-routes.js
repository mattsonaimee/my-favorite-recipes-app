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
      include: [db.Image]
    }).then((dbRecipe) => {
      // console.log('Here is the findAll DB Recipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });

  app.get('/api/recipes/:id', (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Image]
    }).then((dbRecipe) => {
      // console.log('Here is the findOne DB Recipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });

  app.post('/api/recipes', async (req, res) => {
    try {
      const dbRecipe = await db.Recipe.create(req.body.recipe);
      await db.Image.create({ ...req.body.image, RecipeId: dbRecipe.id });
      console.log('Here is the Create DB Recipe: ', dbRecipe);
      res.json(dbRecipe);
    } catch (error) {
      console.log(error);
      res.status(409);
      res.end('Image failed to upload');
    }
  });

  app.delete('/api/recipes/:id', (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbRecipe) => {
      // console.log('Here is the Delete DB Recipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });

  app.put('/api/recipes', (req, res) => {
    db.Recipe.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((dbRecipe) => {
      // console.log('Here is the Update DB Recipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });
};
