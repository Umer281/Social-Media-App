const {Users, db}=require('../db/models')
const {getrandomusername}=require('../utils/username');


 async function createAnomUser(){ 

        const user=await Users.create(
            {username:getrandomusername()}
            )
            return user;
    

}

async function getuserbyId(userid){ 
    const user=await Users.findOne({where: {id:userid}});
    return user;
}
async function getuserbyUsername(username){ 
    const user=await Users.findOne({where:{username:username}});
     return user;
}

//createAnomUser();
exports=module.exports={
    createAnomUser,getuserbyId,getuserbyUsername
}

