const db = require('../models');

module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    db.Users.findAll({}).then((dbUsers) => res.json(dbUsers));
  });

  app.get('/api/users/:id', (req, res) => {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbUsers) => res.json(dbUsers));
  });

  app.post('/api/users', (req, res) => {
    console.log(req.body);
    db.Users.create(req.body).then((dbUsers) => res.json(dbUsers));
  });

  app.delete('/api/users/:id', (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbUsers) => res.json(dbUsers));
  });
};
