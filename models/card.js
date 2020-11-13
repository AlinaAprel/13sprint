const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Card = mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
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

module.export = mongoose.model('card', Card);

