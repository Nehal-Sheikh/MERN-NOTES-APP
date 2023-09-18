const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reminder: {
        type: Boolean,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);    