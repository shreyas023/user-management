const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

//create, update, delete, find
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/addUser',userController.form);
router.post('/addUser',userController.create);
router.get('/editUser/:id',userController.edit);
router.post('/editUser/:id',userController.update);
router.get('/:id',userController.delete);
router.get('/viewUser/:id',userController.viewuser);


module.exports = router;