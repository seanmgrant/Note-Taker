const express = require('express');

// Import our modular routers for  notes
const notes = require('./notesRouter');


const app = express();

app.use('/notesRouter', notes);


module.exports = app;
