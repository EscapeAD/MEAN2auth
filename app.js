const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const passport    = require('passport');
const mongoose    = require('mongoose');

const app         = express();
const port        = 3000;

const users       = require('./routes/users');

// CORS Middleware
app.use(cors());

// BodyPaser Middleware
app.use(bodyParser.json())

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set users route
app.use('/users', users);

// Index Route
app.get('/', (req, res)=>{
  res.send('Invalid EndPoint')
})

// Start Server/Port
app.listen(port, ()=>{
  console.log(`Server Started on port ${port}`)
})
