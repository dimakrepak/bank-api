const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');


router
    .post('/', (req, res) => usersController.addUser(req, res))
    .get('/', (req, res) => usersController.getUsers(req, res))
    


module.exports = router;