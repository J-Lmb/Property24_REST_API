const express = require('express');
//execute express
const app = express();
//Monggose package for MongoDB
const mongoose = require('mongoose');
//to use dotenv for DB credential hiding
//Import routes
const authRoute = require('./routes/auth');


require('dotenv/config');
//import cors to allow Cross-Origin Resource Sharing to make API accepts requests coming from other origins/domains.
const cors = require('cors');
//Middleware for cors
app.use(cors());

//route Middlewares
app.use('/api/user', authRoute);
//import body-Parser
const bodyParser = require('body-parser');

//to upload images
const multer = require('multer');
//Import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const propertyRoute = require('./routes/property');

//Middlewares for body-parser
app.use(bodyParser.json());//bodyPrser runs everytime we hit any request
app.use(express.json());

//Middlewares for routes
//function that execute when routes are being hits
app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/property', propertyRoute);


//ROUTES
app.get('/', (req, res) => { //shouts us back a msg
    res.send('home');
});



//Connect to DB
//used dotenv to protect credentials
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to DB!'))

//listen to server
//app.listen(3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//console.log("Listening on port 3000");
