const express = require('express');
const router = express.Router();
//import the model we wanna post to
const Prop = require('../models/Prop');//whenever we wanna get data, submit data etc...we will use this model.
const mongoose = require('mongoose');
//GETS BACK ALL THE PROPS
router.get('/', async (req, res) => {
    try{
        const props = await Prop.find();//we gonna return everything
        res.json(props);//we send back that response
    }catch(err){
        res.status(404).json({message:err});
    }
});

router.get('/:id', async (req, res) => {
    var id = mongoose.Types.ObjectId(req.params.id);
    let Image = await Model.findOne({ _id: id });
    if (!Image) { return res.status(404).send({ message: 'not found Images' }) }
    Image = Image.image
    res.send({
        data: Image
    });

});
module.exports = router;


//SUBMIT A PROP
router.post('/', function(req, res, next){
    Prop.create(req.body).then(function(prop){
        res.send(prop);
    }).catch(next);
});

//GET BACK A SPECIFIC POST
router.get('/:propId', async (req, res) => {
    console.log(req.params.propId);//This would be like a dynamic parameter. everything you add after prop, is gonna be that prop id. localhost:4000/posts/thisid, 'thisis'is the ID.
    try{
        const prop = await Prop.findById(req.params.propId);//add 'await'as this might take some time as it's coming from DB.
        res.json(prop);
    }catch(err){
        res.status(404).json({message:err});
    }
 
});

//DELETE A POST
router.delete('/:propId', async (req, res) => {
    try{
        const removedProp = await Prop.remove({_id: req.params.propId});
        res.json(removedProp);//Send a JSON response.
    }catch(err){
        res.status(404).json({message:err});
    }
    
});

//UPDATE A POST
router.patch('/:propId', async (req, res) => {
    try{
        const updatedProp = await Prop.updateOne({_id: req.params.propId}, {$set:req.body});
        res.json(updatedProp);
    }catch(err){
        res.status(404).json({message:err});
    }
});

module.exports = router;
