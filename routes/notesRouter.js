const note = require('express').Router();
const path = require("path");
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// GET Route for retrieving all the tips
note.get('/', (req, res) => {
    console.info(`${req.method} request recevied for note`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for submitting feedback
note.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.methos} request received to submit note`)
    console.log(req.body);

   // Destructuring assignment for the items in req.body
    const { text, title, } = req.body;
  
    if (req.body) {
    const newTip = {
        text,
        title,
        notes_id: uuid(),
    };
  
    readAndAppend(newnote, './db/db.json');
    res.json(`Note added successfully 🚀`);
    } else {
    res.error('Error in adding note');
    }
});  