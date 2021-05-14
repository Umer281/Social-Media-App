const {db,Comments}=require('../db/models');



// async function showAllComments(postid){ 
   
//     try{ 
//         const comments=await Comments.findAll({where:{postid:postid}});
//         return comments;
//     }catch(e){ 
//         console.log(e);
//     }
    

// }



// async function CreateComment(userId,body){ 

//     try{ 
//        const comments=await Comments.create({ 
//            userId:userId,
//            body:body

//        })
//     }catch(e){ 
//         console.log(e);
//     }
// }


// async function task(){ 
//     console.log(CreateComment(9,'own comment'));
// }

// task();