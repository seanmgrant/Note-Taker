const express = require('express');
// Import our modular routers for  notes
const notesR = require('./notes');


const app = express();

app.use('/notes', notesR);


module.exports = app;
