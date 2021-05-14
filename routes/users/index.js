const  route=require('express').Router();
const {getuserbyId,getuserbyUsername,createAnomUser}=require('../../controllers/users.js');



route.get('/:id',async(req,res) => { 
     let user;
    if(isNaN(req.params.id)){ 
        //send user by username if id is not present
        user=await getuserbyUsername(req.params.id);
    }else{ 
        user=await getuserbyId(req.params.id);
    }
    if(user){ 
        res.status(200).send(user)
    }else{ 
        res.status(400).send({ 
            error:'no such user'
        })
    }
})


route.post('/',async(req,res) => { 
      const user=await createAnomUser();
      res.status(201).send(user);
})








exports=module.exports={ 
    route
}