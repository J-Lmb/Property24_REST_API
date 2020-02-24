const express = require('express');
const router = express.Router();
//import the model we wanna post to
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on post.');
});

router.get('/specific', (req, res) => {
    res.send('Specific post.');
});

router.post('/', (req, res) => {
    console.log(req.body);
    //create a new post with new Post() and pass it the object with title and description coming from req.body
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    post.save()//save it in DB
    .then(data => {
        res.json(data);//to see the data on the screen.
    })
    .catch(err => {
        res.json({message: err});
    });
});
module.exports = router;
