const express = require("express");
const router = express.Router();
const { addUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controller/User');


router.post('/', addUser)
router.get('/users', getAllUsers)
router.post('/user', getSingleUser)
router.post('/update', updateUser)
router.post('/delete', deleteUser)


module.exports = router;