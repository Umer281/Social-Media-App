const {Users, db}=require('../db/models')
const {getrandomusername}=require('../utils/username');


 async function createAnomUser(){ 

        const user=await Users.create(
            {username:getrandomusername()}
            )
            return user;
    

}


exports=module.exports={
    createAnomUser 
}

