//IMPORT PACKAGE
const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRoutes');

let app = express();

app.use(express.json());

app.use(express.static('./public'))

//USING ROUTES
app.use('/api/v1/movies', moviesRouter);
app.get('*',(req,res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid URL'
    });
});

module.exports = app;

