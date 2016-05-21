import docker=require("../index");

let Docker=new docker();

console.log(Docker.dockerVersion)
Docker.data().then(function(data){
    console.log(data);
}).catch(function(err){
    console.error(err);
});

Docker.stream(function(data){
    console.log(data)
    
})