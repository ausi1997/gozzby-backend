const mongoose  = require('mongoose');

const {mongoUrl} = require('../config/keys'); 

mongoose.connect(mongoUrl, {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false},(err)=>{
// check error   
if(err){
        console.log('DB Connection fails' +err);
    }
    // if ok
    else{
   console.log('DB is Connected....');
    }
});