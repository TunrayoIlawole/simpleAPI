const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// POST request to /users to create a new user
router.post('/users', userController.createUser);

// GET request to /users/id to fetch a user
router.get('/users/:id', userController.fetchUser);

// GET request to /users to fetch all users
router.get('/users', userController.fetchUsers);

// PUT request to users/id to update a user
router.put('/users/:id', userController.updateUser);

// DELETE request to users/id to delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;