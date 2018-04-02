const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// mongoDB/mLab will create the id automatically no need to worry about
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);
