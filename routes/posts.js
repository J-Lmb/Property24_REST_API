const express = require('express');
const router = express.Router();
//import the model we wanna post to
const Post = require('../models/Post');//whenever we wanna get data, submit data etc...we will use this model.

//GETS BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();//we gonna return everything
        res.json(posts);//we send back that response
    }catch(err){
        res.json({message:err});
    }
});

router.get('/specific', (req, res) => {
    res.send('Specific post.');
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    console.log(req.body);
    //create a new post with new Post() and pass it the object with title and description coming from req.body
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save()//save it in DB
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }

});

//GET BACK A SPECIFIC POST
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId);//This would be like a dynamic parameter. everything you add after post, is gonna be that post id. localhost:4000/posts/thisid, 'thisis'is the ID.
    try{
        const post = await Post.findById(req.params.postId);//add 'await'as this might take some time as it's coming from DB.
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
 
});

//DELETE A POST
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
    
});

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;
