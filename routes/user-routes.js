const db = require('../models');

module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    db.User.findAll({
      include: [db.Recipe]
    }).then((dbUser) => {
      console.log(`Here is the findAll DB User ${dbUser}`);
      res.json(dbUser);
    });
  });

  app.get('/api/users/:id', (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Recipe]
    }).then((dbUser) => {
      console.log(`Here is the findOne DB User ${dbUser}`);
      res.json(dbUser);
    });
  });

  app.post('/api/users', (req, res) => {
    db.User.create(req.body).then((dbUser) => {
      console.log(`Here is the Create DB User ${dbUser}`);
      res.json(dbUser);
    });
  });

  app.delete('/api/users/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbUser) => {
      console.log(`Here is the Delete DB User ${dbUser}`);
      res.json(dbUser);
    });
  });

  app.put('/api/users', (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((dbUser) => {
      console.log(`Here is the Update DB User ${dbUser}`);
      res.json(dbUser);
    });
  });
};
