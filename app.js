const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerCards = require('./routes/card.js');
// const routerUsers = require('./routes/user');
// const routerUsersId = require('./routes/user');
// const routerUsersCreate = require('./routes/user');
const router = require('./routes/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(()=> console.log('Mongo has started'))
.catch(err => console.log(err))

app.use('/', routerCards);
app.use('/users', router)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.use('/', (req, res) => {
  res.status(404).json({message: `Запрашиваемый ресурс не найден`});
});

