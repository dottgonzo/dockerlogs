import * as Promise from "bluebird";


import * as child_process from "child_process"
import * as _ from "lodash"

let execSync = child_process.execSync;
let exec = child_process.exec;

interface IDockerConf {

}

interface IdataOpt {

}

interface IstreamOpt {

}



function checkstack(hostNodes) {


    const stacks = [];
    _.map(hostNodes, function (container: any) {


        var compose_label = container.Config.Labels["com.docker.compose.project"];


        var exists = false;
        _.map(stacks, function (stack) {
            if (compose_label === stack.label) {
                exists = true;
                stack.containers.push(container)
            }



        })

        if (!exists) {
            stacks.push({ label: compose_label, containers: [container] })


        }




    })









    return stacks
}


function getData(opt) {

    return new Promise(function (resolve, reject) {
        exec("docker ps | grep -c ''", function (err, stdout, stderr) {
            if (err) {
                reject(err)
            } else if (stdout && parseInt(stdout) && parseInt(stdout) > 1) {
                console.log(parseInt(stdout))
                exec("docker inspect $(docker ps | awk '{print$1}'|grep -v CONTAINER)", function (err, stdout, stderr) {
                    if (err) {
                        console.log(err)
                    } else if (stdout) {


                        const obj = {
                            containers: JSON.parse(stdout),
                            stacks: checkstack(JSON.parse(stdout))
                        }

                        resolve(obj);
                    } else {

                        reject("malformed json docker logs")
                    }
                })
            } else if (stdout && parseInt(stdout) && parseInt(stdout) === 1) {


                        resolve([]);


            } else {

                reject("malformed answer")
            }

        })
    })
}

export class Dockerlogs {

    options: IDockerConf
    dockerVersion: string;
    composeVersion: string;
    apiVersion: string;
    stacks: {};

    constructor(conf?: IDockerConf) {
        this.apiVersion = require("./package.json").version;
        this.dockerVersion = execSync("docker -v | grep version | awk '{print$3}' | sed 's/,//g'").toString("utf-8").replace('\n', '');

        this.composeVersion = execSync("docker-compose -v | grep compose | awk '{print$3}' | sed 's/,//g'").toString("utf-8").replace('\n', '');


        const configuration: IDockerConf = {
        };

        if (conf) {

            Object['assign'](configuration, conf);

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

    stream(cb, options?: IstreamOpt) {
        const that = this;

        function doit() {
            that.data().then(function (data) {

                cb(data)

            })
        }


        if (options) {

        } else {

        }



        setInterval(() => {
            doit()
        }, 5000)

        doit()

    }


}




