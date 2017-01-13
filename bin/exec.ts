import {Dockerlogs} from "../index"

const Docker=new Dockerlogs();

console.log(Docker.dockerVersion)
Docker.data().then(function(data){
    console.log(data);
}).catch(function(err){
    console.error(err);
});

