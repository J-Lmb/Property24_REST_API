const express = require ('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Import validation to use
const {registerValidation, loginValidation} = require('../validation'); 
router.post('/register', async (req, res) => {
    
    //LET'S VALIDATE THE DATA BEFORE MAKING THE USER
    const {error} = registerValidation(req.body);
    
    //res.send(validation);
    if(error) return res.status(400).send(error.details[0].message);
    
    //checking if the user is already present in the DB
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');
    
    //HASH PASSWORDS
    const salt = await bcrypt.genSalt(10);//10 complexity of the hashing
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with the salt
    
    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword//req.body.password
    });
    //Save and catch error
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err){
        res.status(400).send(err);
    }
});

//LOGIN
router.post('/login', async (req,res) => {
    //VALIDATE THE DATA
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //checking if the EMAIL EXIST
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found');
    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password')
    
    //CREATA AND ASSIGN A TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)//to know that my user is logged in
    res.header('auth-token', token).send(token);
    
    
})

module.exports = router;
