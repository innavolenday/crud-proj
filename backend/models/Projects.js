const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    ddate: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
    },
})

const Project =  mongoose.model('projects', projectSchema);

module.exports = Project;