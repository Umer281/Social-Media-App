const {Posts}=require('../db/models')



async function createNewPosts(userId,title,body){
 
    
       try{ 
        const post=await Posts.create({ 
            id:userId,
            title:title,
            body:body
        })
        return post;

       }catch(e){ 
           console.log(e);

       }

}
async function findAllPosts(query){ 
    

    try{ 
        
        if(isNaN(query)){
             const posts=await Posts.findAll();
             return posts;
        }
        else{ 
            //then query will be number ie id and we return post with same id
            posts=await Posts.findAll();
        
            for(p in posts){
                if(p.id==query){ 
                    const post=p;
                    return post;
                    break;
                }
            }
            
        }
        







    }catch(e){ 
        console.log(e);
    }
}
//console.log(createNewPosts(1,'this is first post','some random text'));
//console.log(createNewPosts(2,'this is 2nd post','some more and more random text'));



// below function is to check if we are getting all posts


async function task(){ 
    findAllPosts(1).then(data =>{ 
        console.log(data);
    })
}

task();