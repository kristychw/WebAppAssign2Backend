const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up the necessary middleware
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());

// Enable CORS
app.use(cors()); 

// MongoDB connection
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log('Database is connected!');

}).catch(err=>{
    console.log('Database is NOT connected!! Please check!', err);
    process.exit();
})


app.get('/',(req, res)=>{
    res.json({
        "message": "It is working!"
    })
})

require('./routes/user.route')(app);
require('./routes/contact.route')(app);

// Start the server
app.listen(4000, ()=>{
    console.log('Server is working!!');
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Set up the necessary middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Enable CORS
// app.use(cors()); 

// // MongoDB connection
// const dbConfig = require('./config/database.config');
// const mongoose = require('mongoose');

// mongoose
//   .connect(dbConfig.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('Database is connected!');
//   })
//   .catch(err => {
//     console.log('Database is NOT connected!! Please check!', err);
//     process.exit();
//   });

// app.get('/', (req, res) => {
//   res.json({
//     message: 'It is working!'
//   });
// });

// // Define the login API endpoint
// app.post('/users', (req, res) => {
//   const { username, password } = req.body;

//   // Use MongoDB driver or Mongoose to query the user collection
//   // Check if the username and password match a user in the collection
//   // You can use the User model or direct MongoDB queries here

//   // Example using Mongoose model
//   const User = require('./models/user.models');
//   User.findOne({ username, password })
//     .then(user => {
//       if (!user) {
//         // Invalid credentials
//         res.status(401).json({ error: 'Invalid credentials' });
//       } else {
//         // Successful login
//         // Generate a token or session and send it back to the client
//         res.status(200).json({ message: 'Login successful' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ error: 'An error occurred' });
//     });
// });

// // Start the server
// app.listen(4000, () => {
//   console.log('Server is working!');
// });
