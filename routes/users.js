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
router.put('/:user', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.user}, req.body, {new: true}).then(function(user){
        res.send(user);
    }).catch(next);
});

// delete a property
router.delete('/:user', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.user}).then(function(user){
        res.send(user);
    }).catch(next);
});

// get a single property
router.get('/:user', function(req, res, next){
    //console.log(req.params.user.substring(1));
    User.findById({_id: req.params.user.substring(1)}).then(function(user){
        res.send(user);
    }).catch(next);
});

module.exports = router;