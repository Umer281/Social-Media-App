const {Posts,Users}=require('../db/models')



async function createNewPosts(userId,title,body){
 
    
       try{ 
        const post=await Posts.create({ 
            userId:userId,
            title:title,
            body:body
        })
        return post;

       }catch(e){ 
           console.log(e);

       }

}


async function findAllPosts(){ 
    

    try{ 
          const posts=await Posts.findAll({
              include:[Users]
            });
            return posts;

    }catch(e){ 
        console.log(e);
    }
}


exports=module.exports={ 
    createNewPosts,findAllPosts
}

// async function task1(){ 


//       try{ 
//        await  console.log(createNewPosts(1,'2nd post by someone','another one'));
//       }catch(e){ 
//           console.log(e);
//       }

//      console.log(createNewPosts(9,'this is  post by someone','once upon a time there was some random text'));
//    console.log(createNewPosts(3,'this is 3nd post','some added more and more random text'));
// }
//task1();



// below function is to check if we are getting all posts


// async function task(){ 
//     findAllPosts().then(posts =>{ 
//         for(let p of posts){ 
//            console.log(`${p.title}\n author:${p.user.username}\n ${p.body}`);
        
        

            
//         }
//     })
// }

// task()


//task1();
//task();