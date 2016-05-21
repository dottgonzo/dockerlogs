import * as bluebird from "bluebird"
import merge = require("json-add");
import timerdaemon = require("timerdaemon");

import * as child_process from "child_process"

let execSync = child_process.execSync;
let exec = child_process.exec;

interface IDockerConf {

}

interface IdataOpt {

}

interface IstreamOpt {

}

function getData(opt) {

    return new Promise(function(resolve, reject) {
        exec("docker inspect $(docker ps | awk '{print$1}'|grep -v CONTAINER)", function(err, stdout, stderr) {
            if (err) {

            } else if (stdout) {

                if (stdout) {
                    resolve(stdout);
                } else {

                    reject("malformed answer")
                }

            }
            console.log(stdout);

        })


    })

}

class Docker {

    options: IDockerConf
    dockerVersion: string;
    composeVersion: string;
    apiVersion: string;
    stacks: {};

    constructor(conf?: IDockerConf) {
        this.apiVersion = require("./package.json").version;
        this.dockerVersion = execSync("docker -v | grep version | awk '{print$3}' | sed 's/,//g'").toString("utf-8").replace('\n', '');

        this.composeVersion = execSync("docker-compose -v | grep compose | awk '{print$3}' | sed 's/,//g'").toString("utf-8").replace('\n', '');


        let configuration: IDockerConf = {

        };

        if (conf) {

            merge(configuration, conf);

        }

        this.options = configuration;

    }

    data(options?: IdataOpt) {


        let opt;

        if (options) {



        } else {

        }



        return getData(opt);

    }

    stream(cb,options?: IstreamOpt) {


        

        if (options) {

        } else {

        }

 timerdaemon.pre(5000,function(data){
     
     cb(data)
     
 })
 



    }


}


export = Docker

