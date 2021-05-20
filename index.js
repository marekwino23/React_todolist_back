require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
const PORT = process.env.PORT || 8000;
console.log(PORT)

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const getController = require('./controllers/getController');
const getcurrentTaskController = require('./controllers/getcurrentTaskController');
const addController = require('./controllers/addController');
const deleteController = require('./controllers/deleteController');
const updateController = require('./controllers/updateController');
const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.json());

app.use('/addTask', addController);

app.use('/getTasks', getController);

app.use('/getcurrentTask/:id', getcurrentTaskController);

app.use('/updateTask', updateController);

app.use('/deleteTask', deleteController);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});


module.exports = app;
