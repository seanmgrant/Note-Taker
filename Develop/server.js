// Import express package
const express = require('express');
const note = express();
const api = require('./routes/');
const ? = require('./routes/');



const PORT = process.env.PORT || 3001;

//Set up Express app for data parsing
note.use(express.urlencoded({ extended:true}));
note.use(express.json());
note.use(express.static('public'));


//GET Route for homepage
note.get('/', (req, res) => -
  res.sendFile(path.join(__dirname, '/public/index.html'))
);



//GET request for ALL notes
note.get('/api/reviews', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);




//LISten for conncetions
note.listen(PORT, () => 
console.log(`Note listing at http://localhost:${PORT}`)
);