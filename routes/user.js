// const routerUsers = require('express').Router();
// const routerUsersId = require('express').Router();
// const routerUsersCreate = require('express').Router();
// const { getUsers, getUserId, createUsers } = require('../controllers/users');

// routerUsers.get('/', getUsers);
// routerUsersId.get('/', getUserId);
// routerUsersCreate.post('/', createUsers);

// module.exports = routerUsers, routerUsersId, routerUsersCreate;

const router = require('express').Router();
const { getUsers, getUserId, createUsers } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserId);
router.post('/', createUsers);

module.exports = router;

