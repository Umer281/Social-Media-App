const express=require('express');
const {db}=require('./db/models');
const usersRoute=require('./routes/users/index').route;
const postsRoute=require('./routes/posts/index').route;
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',express.static(path.join(__dirname,'/public')))
app.use('/api/users',usersRoute);
app.use('/api/posts',postsRoute)

db.sync().then(function(){ 
    app.listen(7677,function(){ 
        console.log('running server at 7677');
    })
}).catch(function(error){ 
    console.log(error);
})