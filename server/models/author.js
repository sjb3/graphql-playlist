const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// mongoDB/mLab will create the id automatically no need to worry about
const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);
