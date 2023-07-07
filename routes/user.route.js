//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

module.exports = (app) => {
  const users = require('../controllers/user.controllers');

  app.post('/users', users.login);
  app.get('/users', users.findAll); // Add this route for retrieving users

  // app.get('/users/:id', users.findOne);
  app.put('/users/:id', users.update);
  app.delete('/users/:id', users.delete);
};
