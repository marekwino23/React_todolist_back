require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
const PORT = process.env.PORT || 8000;
console.log(PORT)

const express = require('express');
const cors = require('cors');
const app = express();
// const todo = require('./routes/todo')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const getController = require('./controllers/getController');
const addController = require('./controllers/addController');
const deleteController = require('./controllers/deleteController');
// const updateController = require('./controllers/todo/updateController');
const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(express.json());

app.use('/addTask', addController);

app.use('/getTasks', getController);

// app.use('/todo/updateTask', updateController);

app.use('/deleteTask', deleteController);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});


module.exports = app;
