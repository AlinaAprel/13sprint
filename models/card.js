const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const validator = require('validator');
const { response } = require('express');

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
    validate: {
      validator: (link) => {
        if(validator.isEmail(link) === false) {
          message: `Ваша ссылка неверна`
        } else {
          message: `Ваша ссылка верна`
        }
      }
    }
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

module.exports = mongoose.model('card', Card)
