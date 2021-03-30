const express=require('express');
const {db}=require('./db/models');
const app=express();


db.sync().then(function(){ 
    app.listen(7676,function(){ 
        console.log('running server at 7676');
    })
}).catch(function(error){ 
    console.log(error);
})