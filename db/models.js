const Sequelize=require('sequelize')
const db=new Sequelize('cbsocialmediadb','cbsocialuser','cbsocialpass',{ 
    host:'localhost',
    dialect:'mysql'

})


const COL_ID_DEF= { 
    type:Sequelize.DataTypes.INTEGER(),
    autoIncrement:true,
    primaryKey:true
}

const USERNAME_DEF= { 
    type:Sequelize.DataTypes.STRING(20),
    unique:true,
    allowNull:false
    
}
const TITLE_DEF = { 
    type:Sequelize.DataTypes.STRING(150),
    allowNull:false
}


const Users=db.define('user',{ 
    id:COL_ID_DEF,
    username:USERNAME_DEF

})



const Posts=db.define('posts',{ 
    id:COL_ID_DEF,
    title:TITLE_DEF,
    body:{ 
        type:Sequelize.TEXT('tiny')
    }
})

const Comments=db.define('comment',{ 
    id:COL_ID_DEF,
    title:TITLE_DEF,
    body:{ 
        type:Sequelize.TEXT('tiny')
    }
    
})



//now write code for relationship between different models

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users)

Posts.hasMany(Comments);
Comments.belongsTo(Posts);



exports= module.exports= { 
    db,Users,Posts,Comments
}