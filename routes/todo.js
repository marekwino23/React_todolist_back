const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController')
const deleteController = require('../controllers/deleteController')
const getController = require('../controllers/getController')
const getcurrentTaskController = require('../controllers/getcurrentTaskController/:id')
const updateController = require('../controllers/updateController')

router.post('/addTask',addController)
router.post('/deleteTask',deleteController)
router.get('/getTasks',getController)
router.get('/getcurrentTask/:id',getcurrentTaskController)
router.patch('/updateTask',updateController)



