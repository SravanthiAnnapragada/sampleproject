// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Bill = require('../models/materialbill');

// const db = "mongodb://testuser1:pwtestuser1@ds163034.mlab.com:63034/sample";
// mongoose.Promise = global.Promise;
// mongoose.connect(db,function(err){

//     if(err){
//         console.error("Error!" + err);
//     }
// });


// router.get('/bills',function(req,res){
//     // res.send('api works');
// console.log('get request for all bills');
// Bill.find({})
// .exec(function(err, bills){
//     if(err){
//         console.log("Error retrieving Bills");
//     }else{
//         res.json(bills);
//     }
// })
// });
// module.exports = router;