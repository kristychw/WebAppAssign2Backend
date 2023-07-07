//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

module.exports = (app) => {
  const contacts = require('../controllers/contact.controllers');

  app.post('/contacts', contacts.create);
  app.get('/contacts', contacts.findAll); // Add this route for retrieving contacts

  app.get('/contacts/:id', contacts.findOne);
  app.put('/contacts/:id', contacts.update);
  app.delete('/contacts/:id', contacts.delete);
};
