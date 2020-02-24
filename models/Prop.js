const mongoose = require('mongoose');

//create schema
const PropSchema = mongoose.Schema({
    id: String,
    image: {type: String,
    required: true,
    },
    price: String,
    bed: String,
    bedrooms: String,
    address: String,
    // img: { data: Buffer, contentType: String }
    type:mongoose.Schema.ObjectId
});

module.exports = mongoose.model('Prop', PropSchema);