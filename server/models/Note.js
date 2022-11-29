const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    name:{ type: String, require: true },
    notes: {
        idNote:{
            type: Number,
            require: true,
        },
        note:{
            type: String,
            require: true,
        }
    }
});

module.exports = mongoose.model('Note', noteSchema);