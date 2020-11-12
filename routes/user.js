const routerUsers = require('express').Router();
const routerUserId = require('express').Router();
const routerCreateUsers = require('express').Router();
const { getUsers, getUserId, postUsers } = require('../controllers/users');

routerUsers.get('/', getUsers);
routerUserId.get('/', getUserId);
routerCreateUsers.post('/', postUsers);

module.exports = routerUsers, routerUserId, routerCreateUsers;

