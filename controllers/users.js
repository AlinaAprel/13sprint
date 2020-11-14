const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
  .then (users => {
    res.status(200).json({ data: users })
  })
  .catch (err => {
    res.status(404).json({message: `Ошибка при чтении файла ${err}` })
  })
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.userId)
  .then(user => res.status(200).send({ data: user}))
  .catch( err => res.status(500).send({message: `Нет пользователя с таким id`}))
};

module.exports.createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
  .then(user => res.send({data: user}))
  .catch(err => res.status(500).send({message: `Произошла ошибка при создании user ${err}`}))
};
