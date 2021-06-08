const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    num: Number,
    timeOfEntry: Date,
})

// Export the model
const items = mongoose.model('items', itemSchema)

module.exports = items