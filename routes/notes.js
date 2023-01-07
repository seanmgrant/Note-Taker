const notes = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');



// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
    console.info(`${req.method} request recevied for note`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for submitting feedback
notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit note`)
    console.log(req.body);

   // Destructuring assignment for the items in req.body
    const { title, text, } = req.body;
  
    if (req.body) {
    const newNote = {
        title,
        text,
        id: uuid(),
    };
  
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
    } else {
    res.error('Error in adding note');
    }
});
  // DELETE Route 
notes.delete('/notes/:id', (req, res) => {
    let notesList = JSON.parse(data);
    for (let i = 0; i < notesList.length; i++) {
        if (notesList[i].id === req.params.id) {
            notes.splice(i, 1);
        }}

    fs.writeFileSync('db/db.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Note was deleted');
        }
    })});

module.exports = notes;