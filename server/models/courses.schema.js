const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    subject: { type: String, required: true },
    userId: { type: String, required: true },
    date: {type: Date, required: true}
}, {
    timestamps: true
});


module.exports = mongoose.model('Courses', coursesSchema);