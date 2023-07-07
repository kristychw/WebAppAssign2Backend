module.exports = (app) => {
  const users = require('../controllers/user.controllers');

  app.post('/users', users.create);
  app.get('/users', users.findAll); // Add this route for retrieving users

  app.get('/users/:id', users.findOne);
  app.put('/users/:id', users.update);
  app.delete('/users/:id', users.delete);
};
