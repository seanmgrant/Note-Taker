// Import express package
const express = require('express');
const notes = require('./db/db.json');
const app = express();
const path = require('path');

const PORT = process.env.port || 3001;

const api = require('./routes/index');

//Set up Express app for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET Route for homepage
app.get('/notes', (req, res) => -
  res.sendFile(path.join(__dirname, '/public/index.html'))
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
console.log(`Note listing at http://localhost:${PORT}`)
);