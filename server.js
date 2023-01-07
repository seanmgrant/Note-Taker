// Import express package
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const app = express();
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;


//Set up Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);


//GET Route for homepage
app.get('/notes', (req, res) => -
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET route for API
app.get('/api/notes', (req, res) => {
  res.json(notes.slice(1));
});

//LISten for conncetions
app.listen(PORT, () => 
console.log(`Note listening at http://localhost:${PORT}`)
);