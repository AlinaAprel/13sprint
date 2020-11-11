const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: ObjectId,
    required: true
  },
  likes: {
    type: ObjectId,
    default: null
  },
  createdAd: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model('card', cardSchema);

