const express     = require('express');
const path        = require('path');
const bodyPaser   = require('body-parser');
const cors        = require('cors');
const passport    = require('passport');
const mongoose    = require('mongoose');

const app         = express();
const port        = 3000;

app.get('/', (req, res)=>{
  res.send('Invalid EndPoint')
})



app.listen(port, ()=>{
  console.log(`Server Started on port ${port}`)
})
