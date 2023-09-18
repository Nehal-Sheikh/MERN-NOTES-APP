const express = require("express");

const router = express.Router();

const notesController = require("../controllers/notes")

//GET /notes
router.get('/notes', notesController.getNotes);                                                        //after the comma , we havegiven the logic and for the logic behind this url path we will be writing it in controllers folder file. and to reach the route we have to register it on the app.js file.

router.post('/post', notesController.createNote);

router.delete('/delete/:noteId', notesController.deleteNote);

router.get('/note/:noteId', notesController.getNote);

router.put('/update/:noteId', notesController.updateNote);

module.exports = router;
