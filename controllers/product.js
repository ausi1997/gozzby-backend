const products = require('../productData');


// importing the product module
const Product = require('../models/product');




 exports.ProductData = async()=>{
    try{
  await Product.insertMany(products.products,(err,result)=>{
      if(result){
          console.log('succees');
      }
      else{
          console.log('failed');
      }
  })
    }
    catch(error){
        console.log(error);
    }
}

