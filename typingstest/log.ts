

import { IDocker } from "../dockertyped"


const log: IDocker[] = [
    {
        "Id": "d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756",
        "Created": "2017-01-03T11:29:47.906251352Z",
        "Path": "run.sh",
        "Args": [
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2805,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:21.587734531Z",
            "FinishedAt": "2017-01-13T18:51:46.522220146Z"
        },
        "Image": "sha256:5f3b154b371d1a17a8ce99ad0a46f3716b4beade7c04d8bef4d1e1d02fc43c27",
        "ResolvConfPath": "/var/lib/docker/containers/d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756/hostname",
        "HostsPath": "/var/lib/docker/containers/d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756/hosts",
        "LogPath": "/var/lib/docker/containers/d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756/d2f1d27817023373afa22a36774ae742483c59ca67011a6f70ecbed0348c4756-json.log",
        "Name": "/nextcloud",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/cloud/volumes/nextcloud/apps:/apps2:rw",
                "/cloud/volumes/nextcloud/data:/data:rw",
                "/cloud/volumes/nextcloud/config:/config:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "nginx-proxy",
            "PortBindings": {
                "8888/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "8888"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
            {
                "Source": "/cloud/volumes/nextcloud/apps",
                "Destination": "/apps2",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nextcloud/config",
                "Destination": "/config",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nextcloud/data",
                "Destination": "/data",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Name": "4373ff2d287cb327618dec5b7b4f81300c7f28e3b05d2b5a6f54505358f7781e",
                "Source": "/var/lib/docker/volumes/4373ff2d287cb327618dec5b7b4f81300c7f28e3b05d2b5a6f54505358f7781e/_data",
                "Destination": "/var/lib/redis",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "d2f1d2781702",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "8888/tcp": {
                }
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "ADMIN_USER=admin",
                "DB_PASSWORD=database_password",
                "DB_TYPE=mysql",
                "LETSENCRYPT_EMAIL=darioyzf@gmail.com",
                "VIRTUAL_PORT=80",
                "DB_NAME=nextcloud",
                "DB_HOST=db_nextcloud",
                "ADMIN_PASSWORD=mrrrobotl5665644kh2lk45hsf",
                "VIRTUAL_HOST=share.caruso.online",
                "DB_USER=nextcloud",
                "VIRTUAL_NETWORK=proxy-tier",
                "LETSENCRYPT_HOST=share.caruso.online",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "UID=991",
                "GID=991",
                "UPLOAD_MAX_SIZE=10G",
                "APC_SHM_SIZE=128M",
                "OPCACHE_MEM_SIZE=128",
                "REDIS_MAX_MEMORY=64mb",
                "CRON_PERIOD=15m",
                "TZ=Etc/UTC"
            ],
            "Cmd": [
                "run.sh"
            ],
            "Image": "wonderfall/nextcloud",
            "Volumes": {
                "/apps2": {
                },
                "/config": {
                },
                "/data": {
                },
                "/var/lib/redis": {
                }
            },
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "e818b6ae2c9669823f3eeb751ee73691d35ed3bbfd488b352d306ab46c3ad408",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "studiodocker",
                "com.docker.compose.service": "nextcloud",
                "com.docker.compose.version": "1.9.0",
                "description": "A server software for creating file hosting services",
                "nextcloud": "Nextcloud v11.0.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "0acfdcc6332e8f2cd518ff5cab888e5bade96df9c366c0ca66c2900fba9ec5e3",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "8888/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "8888"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/0acfdcc6332e",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "nginx-proxy": {
                    "IPAMConfig": null,
                    "Links": [
                        "db_nextcloud:db_nextcloud"
                    ],
                    "Aliases": [
                        "d2f1d2781702",
                        "nextcloud"
                    ],
                    "NetworkID": "ff83548116fcb8e58fc646fd72434615327b53571a32102425b419df794ce7ca",
                    "EndpointID": "d9011cb9ebbda8aaae7dfe3287ca44a73a370317e27e65b4b07f993cb34782e4",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:03"
                }
            }
        }
    },
    {
        "Id": "08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f",
        "Created": "2017-01-03T11:29:47.882710996Z",
        "Path": "/bin/bash",
        "Args": [
            "/app/entrypoint.sh",
            "/bin/bash",
            "/app/start.sh"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2902,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:20.636616421Z",
            "FinishedAt": "2017-01-13T18:51:46.514822489Z"
        },
        "Image": "sha256:dfbebde4c4d901f2adbf5db1b3382c175268ce5df05ee61cbfda139160238ae0",
        "ResolvConfPath": "/var/lib/docker/containers/08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f/hostname",
        "HostsPath": "/var/lib/docker/containers/08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f/hosts",
        "LogPath": "/var/lib/docker/containers/08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f/08a7913887c2b61401ed23edd79ca32e41822b59118dba7579e453280372d00f-json.log",
        "Name": "/nginx-companion-letsencrypt",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/var/run/docker.sock:/var/run/docker.sock:ro",
                "/cloud/volumes/certs:/etc/nginx/certs:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "nginx-proxy",
            "PortBindings": {
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
                "f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e:rw"
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
            {
                "Source": "/cloud/volumes/certs",
                "Destination": "/etc/nginx/certs",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nginx-proxy/vhost.d",
                "Destination": "/etc/nginx/vhost.d",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/var/run/docker.sock",
                "Destination": "/tmp/docker.sock",
                "Mode": "",
                "RW": false,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nginx-proxy/html",
                "Destination": "/usr/share/nginx/html",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/var/run/docker.sock",
                "Destination": "/var/run/docker.sock",
                "Mode": "ro",
                "RW": false,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "08a7913887c2",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "DEBUG=false",
                "DOCKER_GEN_VERSION=0.7.3",
                "DOCKER_HOST=unix:///var/run/docker.sock"
            ],
            "Cmd": [
                "/bin/bash",
                "/app/start.sh"
            ],
            "Image": "alastaircoote/docker-letsencrypt-nginx-proxy-companion",
            "Volumes": {
                "/etc/nginx/certs": {
                },
                "/var/run/docker.sock": {
                }
            },
            "WorkingDir": "/app",
            "Entrypoint": [
                "/bin/bash",
                "/app/entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "dd7e508137a94a6354d20c1f494902970eeb73a403bf815ad90a7d8bc9dfa27e",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "studiodocker",
                "com.docker.compose.service": "letsencrypt-companion",
                "com.docker.compose.version": "1.9.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "613016df8ed313c798f053ddf12a51bf1d3c49e2665700730ea418eb380b1689",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
            },
            "SandboxKey": "/var/run/docker/netns/613016df8ed3",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "nginx-proxy": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "letsencrypt-companion",
                        "08a7913887c2"
                    ],
                    "NetworkID": "ff83548116fcb8e58fc646fd72434615327b53571a32102425b419df794ce7ca",
                    "EndpointID": "bfd2102939d35313fa78e0e8f171a2b184380835b6c09e0be2b01635d1bfd93a",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.6",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:06"
                }
            }
        }
    },
    {
        "Id": "e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765",
        "Created": "2017-01-03T11:29:47.015375133Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "mysqld"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2813,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:21.451516017Z",
            "FinishedAt": "2017-01-13T18:51:48.615661271Z"
        },
        "Image": "sha256:c9466db443d846318c1342b219b551692dbd9826d6180f5f366e157595697580",
        "ResolvConfPath": "/var/lib/docker/containers/e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765/hostname",
        "HostsPath": "/var/lib/docker/containers/e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765/hosts",
        "LogPath": "/var/lib/docker/containers/e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765/e5e244baa54160710a5b233ad03c58545428e6814bb38039de89930cc1671765-json.log",
        "Name": "/db_nextcloud",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/cloud/volumes/nextcloud/db:/var/lib/mysql:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "studiodocker_default",
            "PortBindings": {
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
            {
                "Source": "/cloud/volumes/nextcloud/db",
                "Destination": "/var/lib/mysql",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "e5e244baa541",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "3306/tcp": {
                }
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "MYSQL_ROOT_PASSWORD=root_password",
                "MYSQL_PASSWORD=database_password",
                "MYSQL_USER=nextcloud",
                "MYSQL_DATABASE=nextcloud",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "GOSU_VERSION=1.7",
                "MARIADB_MAJOR=10.1",
                "MARIADB_VERSION=10.1.20+maria-1~jessie"
            ],
            "Cmd": [
                "mysqld"
            ],
            "Image": "mariadb:10",
            "Volumes": {
                "/var/lib/mysql": {
                }
            },
            "WorkingDir": "",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "89cb393faf79e2ea59bad5982a8e4bae052084403b2e5c3506bc578ea6ef69f0",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "studiodocker",
                "com.docker.compose.service": "db_nextcloud",
                "com.docker.compose.version": "1.9.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "efaf69b76d2f08166519e6ce0b113eab1fbcf86637f36d906916340f8a27ad0e",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "3306/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/efaf69b76d2f",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "studiodocker_default": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "db_nextcloud",
                        "e5e244baa541"
                    ],
                    "NetworkID": "478cd1b66adb1249e5e1d24abde9943eefd7057e3e12cac091d04f71791fd99d",
                    "EndpointID": "170b2e006c67f5c6444ca13d74f44182bea2fdac0bda6928263e060cf8a5e030",
                    "Gateway": "172.19.0.1",
                    "IPAddress": "172.19.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:13:00:02"
                }
            }
        }
    },
    {
        "Id": "f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e",
        "Created": "2017-01-03T11:29:47.009074254Z",
        "Path": "/app/docker-entrypoint.sh",
        "Args": [
            "forego",
            "start",
            "-r"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2810,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:20.527256434Z",
            "FinishedAt": "2017-01-13T18:51:46.525878493Z"
        },
        "Image": "sha256:a1397917f49c5b94002d02c31e7f46aa1b2d367dac0a0530c3588232011bcda7",
        "ResolvConfPath": "/var/lib/docker/containers/f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e/hostname",
        "HostsPath": "/var/lib/docker/containers/f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e/hosts",
        "LogPath": "/var/lib/docker/containers/f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e/f9b5bec4046d890c1cbd9be5db840b577c1f7c5037200453bf7898eaa53d0b0e-json.log",
        "Name": "/nginx-proxy",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/cloud/volumes/nginx-proxy/html:/usr/share/nginx/html:rw",
                "/var/run/docker.sock:/tmp/docker.sock:ro",
                "/cloud/volumes/certs:/etc/nginx/certs:ro",
                "/cloud/volumes/nginx-proxy/vhost.d:/etc/nginx/vhost.d:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "nginx-proxy",
            "PortBindings": {
                "443/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "443"
                    }
                ],
                "80/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "80"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
            {
                "Source": "/cloud/volumes/certs",
                "Destination": "/etc/nginx/certs",
                "Mode": "ro",
                "RW": false,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nginx-proxy/vhost.d",
                "Destination": "/etc/nginx/vhost.d",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/var/run/docker.sock",
                "Destination": "/tmp/docker.sock",
                "Mode": "ro",
                "RW": false,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/volumes/nginx-proxy/html",
                "Destination": "/usr/share/nginx/html",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "f9b5bec4046d",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "443/tcp": {
                },
                "80/tcp": {
                }
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.11.8-1~jessie",
                "DOCKER_GEN_VERSION=0.7.3",
                "DOCKER_HOST=unix:///tmp/docker.sock"
            ],
            "Cmd": [
                "forego",
                "start",
                "-r"
            ],
            "Image": "jwilder/nginx-proxy",
            "Volumes": {
                "/etc/nginx/certs": {
                },
                "/etc/nginx/vhost.d": {
                },
                "/tmp/docker.sock": {
                },
                "/usr/share/nginx/html": {
                }
            },
            "WorkingDir": "/app",
            "Entrypoint": [
                "/app/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "afb955b5d21689ef2fd9609f48fd1252877a71032988d9ace37dbd8127d37614",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "studiodocker",
                "com.docker.compose.service": "nginx-proxy",
                "com.docker.compose.version": "1.9.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "00aa0d02df743cffb0fc2d85164076c13ba3bbb897f661cfb304cdfbf93f38e4",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "443/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "443"
                    }
                ],
                "80/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "80"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/00aa0d02df74",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "nginx-proxy": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "f9b5bec4046d",
                        "nginx-proxy"
                    ],
                    "NetworkID": "ff83548116fcb8e58fc646fd72434615327b53571a32102425b419df794ce7ca",
                    "EndpointID": "3ab59cf1ce4bc45c8a3c51a0e419c6383658eabf8bcb912da52c4f424840f7db",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.5",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:05"
                }
            }
        }
    },
    {
        "Id": "076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232",
        "Created": "2017-01-03T11:29:47.004916269Z",
        "Path": "transmission.sh",
        "Args": [
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2900,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:20.636109441Z",
            "FinishedAt": "2017-01-13T18:51:48.435914081Z"
        },
        "Image": "sha256:0ea91bc60a17688a9c4508aadd2ac220a729c323b81d79643fb9449e1e43d2be",
        "ResolvConfPath": "/var/lib/docker/containers/076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232/hostname",
        "HostsPath": "/var/lib/docker/containers/076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232/hosts",
        "LogPath": "/var/lib/docker/containers/076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232/076f6dbfb129767b073f69c9831db74ae2c0015b87a19b7fccd67f4a4771c232-json.log",
        "Name": "/studiodocker_transmission_1",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/cloud/compose/studiodocker/settings/transmission.json:/var/lib/transmission-daemon/info/settings.json:rw",
                "/cloud/volumes/transmission:/var/lib/transmission-daemon:rw"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "nginx-proxy",
            "PortBindings": {
                "51413/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "51413"
                    }
                ],
                "9091/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "9091"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
            {
                "Source": "/cloud/volumes/transmission",
                "Destination": "/var/lib/transmission-daemon",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Source": "/cloud/compose/studiodocker/settings/transmission.json",
                "Destination": "/var/lib/transmission-daemon/info/settings.json",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "076f6dbfb129",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "51413/tcp": {
                },
                "51413/udp": {
                },
                "9091/tcp": {
                }
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "TZ=Europe/Rome",
                "TRPASSWD=00discarica11",
                "USERID=1000",
                "LETSENCRYPT_EMAIL=darioyzf@gmail.com",
                "VIRTUAL_PORT=9091",
                "VIRTUAL_HOST=download.caruso.online",
                "VIRTUAL_NETWORK=proxy-tier",
                "TRUSER=transmission",
                "LETSENCRYPT_HOST=download.caruso.online",
                "GROUPID=1000",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": null,
            "Image": "dperson/transmission",
            "Volumes": {
                "/var/lib/transmission-daemon": {
                },
                "/var/lib/transmission-daemon/info/settings.json": {
                }
            },
            "WorkingDir": "",
            "Entrypoint": [
                "transmission.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "e983b53ecc8cd30273a9395b0094bb559afbe14273758551c4e1a5cb99e08f4a",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "studiodocker",
                "com.docker.compose.service": "transmission",
                "com.docker.compose.version": "1.9.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "aae97c03d7169e0f44a16a498e285e51a95fd5502c0cf3267afaf2a980cb0457",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "51413/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "51413"
                    }
                ],
                "51413/udp": null,
                "9091/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "9091"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/aae97c03d716",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "nginx-proxy": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "transmission",
                        "076f6dbfb129"
                    ],
                    "NetworkID": "ff83548116fcb8e58fc646fd72434615327b53571a32102425b419df794ce7ca",
                    "EndpointID": "26ddeea852789431f822da42d29ba060ed74bfc60a6c8df88ba89724e7792eac",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.4",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:04"
                }
            }
        }
    },
    {
        "Id": "011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851",
        "Created": "2016-12-20T11:02:02.664658733Z",
        "Path": "/usr/sbin/mosquitto",
        "Args": [
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2822,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2017-01-13T18:52:20.466753927Z",
            "FinishedAt": "2017-01-13T18:51:46.509042803Z"
        },
        "Image": "sha256:7252e0331aea0cb9f30c0fc151de00cc29135bff9f0035715fcc7246b67de833",
        "ResolvConfPath": "/var/lib/docker/containers/011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851/hostname",
        "HostsPath": "/var/lib/docker/containers/011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851/hosts",
        "LogPath": "/var/lib/docker/containers/011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851/011e8988f2b3636bf3c84e908d0e4b236e0cc3fb4b65c87667f437de60749851-json.log",
        "Name": "/iostatus_mqtt_1",
        "RestartCount": 0,
        "Driver": "aufs",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {
                }
            },
            "NetworkMode": "nginx-proxy",
            "PortBindings": {
                "1883/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "1883"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "always",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": [
            ],
            "CapAdd": null,
            "CapDrop": null,
            "Dns": [
            ],
            "DnsOptions": [
            ],
            "DnsSearch": [
            ],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": null,
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": null,
            "DiskQuota": 0,
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": -1,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0
        },
        "GraphDriver": {
            "Name": "aufs",
            "Data": null
        },
        "Mounts": [
        ],
        "Config": {
            "Hostname": "011e8988f2b3",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "1883/tcp": {
                }
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "DEBIAN_FRONTEND=noninteractive"
            ],
            "Cmd": null,
            "Image": "ncarlier/mqtt",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/usr/sbin/mosquitto"
            ],
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.config-hash": "634b8a1831d600b88b7413247bcbb33ef103fe8b83b15f9a2bf5c9b4afaa3722",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "iostatus",
                "com.docker.compose.service": "mqtt",
                "com.docker.compose.version": "1.9.0"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "8863625de990d8339755027068fde015483f3ea12547cf5b65c284b6950ecf19",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "1883/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "1883"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/8863625de990",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "nginx-proxy": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "mqtt",
                        "011e8988f2b3"
                    ],
                    "NetworkID": "ff83548116fcb8e58fc646fd72434615327b53571a32102425b419df794ce7ca",
                    "EndpointID": "420e6ade555e6426fcc7a078297c2c4faf9d311cde0b01f78a05b35d13c8455e",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:02"
                }
            }
        }
    }
]