//call external methods
const Note = require('../models/Note');

//async method to create a new note
exports.createNote = async (req,res) =>{
    try {
        
        let note;
        note = new Note(req.body);

        await note.save();
        res.send(note);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}

//async method to obtain all notes
exports.getNotes = async(req,res) =>{

    try {
        
        const notes = await Note.find();
        res.json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}

//async method to obtain notes by ID
exports.getNote = async(req,res) =>{
    try {
        let note = await Note.findById(req.params.id);
        if(!note)
        {
            res.status(500).send('Lo que busca no existe');
        }
        res.json(note);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error on try catch');
    }
}

//asyn method to update notes by ID
exports.updateNote = async(req,res) =>{
    try {
        
        const{name, notes:notes} = req.body;
        let notess = await Note.findById(req.params.id);

        if(!notess)
        {
            res.status(500).send('La nota no existe');
        }

        notess.name = name;
        notess.notes.idNote = notes.idNote;
        notess.notes.note = notes.note;

        notess = await Note.findOneAndUpdate({_id: req.params.id}, notess, {new: true});
        res.json(notess);


    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//asyn method to delete notes by ID
exports.deleteNotes = async(req,res) =>{
    try {
        
        let note = await Note.findById(req.params.id);

        if(!note)
        {
            res.status(500).send('La nota no existe');
        }

        await Note.findOneAndRemove({_id: req.params.id});

        res.json({msg: "Resultados eliminados"});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}