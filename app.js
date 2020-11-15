const express = require('express');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/user');
const routerCards = require('./routes/card');

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

app.use((req, res, next) => {
  req.user = {
      _id: '5faeb9960acaf6063285dc8f'
  };
  next();
});
app.use('/cards', routerCards);
app.use('/users', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.use('/', (req, res) => {
  res.status(404).json({message: `Запрашиваемый ресурс не найден`});
});

