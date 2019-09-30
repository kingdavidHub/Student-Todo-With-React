const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, trim: true, unique: true, minlength: 3 },
    courseStudying: {type: String, required: true}
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);