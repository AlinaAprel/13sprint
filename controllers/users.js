const userSchema = require('../models/user');
const fs = require('fs').promises;

module.exports.getUsers = (req, res) => {
  fs.readFile('./data/users.json', 'utf-8')
  .then (data => {
    data = JSON.parse(data);
    res.status(200).json(data)
  })
  .catch (err => {
    res.status(404).json({message: `Ошибка при чтении файла ${err}` })
  })
};

module.exports.getUserId = (req, res) => {
  fs.readFile('./data/users.json', 'utf-8')
  .then((data) => {
    const users = JSON.parse(data);
    const userId = users.find((item) => item._id === req.params.id);
    if(!userId) {
      res.status(404).json({message: `Нет пользователя с таким id`})
      return;
    } else {
      res.status(200).json(userId)
    }
  })
};

module.exports.postUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  console.log('хы')
  userSchema.create({ name, about, avatar })
  .then(user => res.send({data: user}))
  .catch(err => res.status(500).send({message: `Произошла ошибка ${err}`}))
};
