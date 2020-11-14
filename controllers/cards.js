const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
  .then(cards => res.status(200).send({ data: cards }))
  .catch(err => res.status(404).json({message: `Ошибка при чтении файла`}))
};

module.exports.createCard = (req, res) => {
  const userIdForCard = req.user._id;
  const { name, link } = req.body;
  Card.create({name, link, owner: userIdForCard})
  .then(card => res.status(200).send({ data: card}))
  .catch(err => res.status(404).json({message: `Произошла ошибка при создании карточки ${err}`}))
}

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
  .then(card => res.status(200).send({ data: card}))
  .catch(err => res.status(500).send({message: `Ошибка при удалении карточки ${err}`}))
}