const routerCards = require('express').Router();
const fs = require('fs').promises;

routerCards.get('/cards', (req, res) => {
  fs.readFile('./data/cards.json', 'utf-8')
  .then (data => {
    data = JSON.parse(data);
    res.status(200).json(data)
  })
  .catch (() => {
    res.status(404).json({message: "Ошибка при чтении файла"})
  })
})

module.exports = routerCards;