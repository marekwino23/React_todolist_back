const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController')
const deleteController = require('../controllers/deleteController')
const getController = require('../controllers/getController')
// const updateController = require('../controllers/todo/updateController')

router.post('/addTask',addController)
router.post('/deleteTask',deleteController)
router.get('/getTasks',getController)
// router.patch('/updateTask',updateController)



