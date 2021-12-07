const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20, 'max characters 20']

    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)