module.exports = (app) => {
  const contacts = require('../controllers/contact.controllers');

  app.post('/contacts', contacts.create);
  app.get('/contacts', contacts.findAll); // Add this route for retrieving contacts

  app.get('/contacts/:id', contacts.findOne);
  app.put('/contacts/:id', contacts.update);
  app.delete('/contacts/:id', contacts.delete);
};
