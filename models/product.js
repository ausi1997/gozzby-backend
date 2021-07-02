const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
})

mongoose.model('product',productSchema);

module.export = mongoose.model('product');