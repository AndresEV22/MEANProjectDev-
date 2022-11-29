const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.post('/', noteController.createNote);//add notes
router.get('/', noteController.getNotes);//obtain all notes
router.get('/:id', noteController.getNote);//obtain notes by id
router.put('/:id', noteController.updateNote);//Update notes by id
router.delete('/:id', noteController.deleteNotes);//Delete notes by id

module.exports = router;