const express = require ('express');
const router = express.Router();
const User = require('../models/User');

// get a list of all properties
router.get('/', function(req, res, next){
    User.find({}).then(function(user){
        res.json(user);
    }).catch(next);
});

// add a new property to the database
router.post('/', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// edit a property, with the specified properties ID in the URL
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne({_id: req.params.userId}, {$set: {title: req.body.title}});
        res.json(updatedUser);
    }catch(err){
        res.status(404).json({message:err});
    }
});
// delete a property
router.delete('/:user', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.user}).then(function(user){
        res.send(user);
    }).catch(next);
});

// get a single property
router.get('/:userId', async(req, res) => {
    //console.log(req.params.user.substring(1));
    try{
           const post = await User.findById(req.params.userId);
           res.json(post);
           }catch(err){
                res.json({message: err});           
           }
         
});
module.exports = router;