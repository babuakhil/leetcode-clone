const mongoose = require('mongoose');

// Define the schema for a coding problem
const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    sampleInput: {
        type: String,
        required: true
    },
    sampleOutput: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Problem = mongoose.model('Problem', problemSchema);

// Export the model to be used in other files
module.exports = Problem;
