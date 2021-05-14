const route=require('express').Router();
const{findAllPosts,createNewPosts}=require('../../controllers/posts.js');



route.get('/',async(req,res) =>{ 
   const posts=await findAllPosts();
   res.status(200).send(posts);
})

route.post('/',async(req,res) =>{ 
    const {id,title,body}=req.body;
    if((!id) || (!title) || (!body)){ 
        res.status(401).send({ 
            error:'enter title,body'
        })
    }else{ 
        const post=createNewPosts(id,title,body);
        res.status(201).send(post)
    }

})



exports=module.exports={ 
    route
}