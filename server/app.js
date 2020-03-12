const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    router = require('./routes'),
    mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Bodyparsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve our static build files
app.use(express.static(path.join(__dirname, '../client/build')));
// Provides great rout logging in our console for debugging
app.use(morgan('dev'));

// Import the routing setup from our Router 
app.use('/', router);

//Serving react on routes unused by previous routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Connect to the Mongo DB

var DB_URL = process.env.MONGODB_URI;
mongoose.connect(DB_URL, { useNewUrlParser: true });

//Startup
app.listen(PORT, () => {
    console.log(`The API Server is listening on port: ${PORT}`)
})