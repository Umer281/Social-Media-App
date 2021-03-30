let ADJECTIVE=['careless', 'painstaking','eight','melted','puzzled','quack','flowery','black-and-white'];
let NAMES=['beaver','antelope','mountain goat','colt','mink','gemsbok','orangutan','mole']

function getrandomusername(){ 
 let user= ADJECTIVE[Math.floor(Math.random()*8)];
 let name=NAMES[Math.floor(Math.random()*8)];
 return `${user}-${name}`;

}


console.log(getrandomusername());
console.log(getrandomusername());
console.log(getrandomusername());
console.log(getrandomusername());

exports=module.exports={ 
    getrandomusername
}