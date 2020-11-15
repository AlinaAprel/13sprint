const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
  .orFail(new Error('NotFound', 'CastError'))
  .then (users => {
    res.status(200).json({ data: users })
  })
  .catch((err) => {
    if(err.message === 'CastError') {
      res.status(400).send({message: `Переданы некорректные данные`})
      return;
    } else if (err.message === 'NotFound')
     {
      res.status(400).send({message: `Объект не найден`})
      return;
    } else {
      res.status(500).send({message: `Ошибка сервера`})
    }
  })
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.userId)
  .orFail(new Error('NotFound', 'CastError'))
  .then(user => res.status(200).send({ data: user}))
  .catch((err) => {
    if(err.name === 'CastError') {
      res.status(400).send({message: `Невалидный id`})
      return;
    } else if (err.message === 'NotFound') {
      res.status(400).send({message: `id не найден`})
      return;
    } else {
      res.status(500).send({message: `Ошибка сервера`})
    }
  })
};

module.exports.createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
  .then(user => res.send({data: user}))
  .catch(err => res.status(500).send({message: `Произошла ошибка при создании user ${err}`}))
};
