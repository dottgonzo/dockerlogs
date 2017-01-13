
interface IMount {
    Name?: string
    Source: string
    Destination: string
    Driver?: string
    Mode: string
    RW: boolean
    Propagation: string
}

interface IPortBindings{
    
HostIp:string
HostPort:string

}


export interface IDocker {
    Id: string
    Created: string
    Path: string
    Args: any[],
    State: {
        Status: string
        Running: boolean
        Paused: boolean
        Restarting: boolean
        OOMKilled: boolean
        Dead: boolean
        Pid: number,
        ExitCode: number,
        Error: string
        StartedAt: string
        FinishedAt: string
    },
    Image: string
    ResolvConfPath: string
    HostnamePath: string
    HostsPath: string
    LogPath: string
    Name: string
    RestartCount: number,
    Driver: string
    MountLabel: string
    ProcessLabel: string
    AppArmorProfile: string
    ExecIDs: any
    HostConfig: {
        Binds: string[],
        ContainerIDFile: string
        LogConfig: {
            Type: string
            Config: {}
        },
        NetworkMode: string
        PortBindings: any,
        RestartPolicy?: {
            Name: string
            MaximumRetryCount: number
        },
        AutoRemove: boolean
        VolumeDriver: string
        VolumesFrom: any[]
        CapAdd: any
        CapDrop: any
        Dns: any[]
        DnsOptions: any[]
        DnsSearch: any[]
        ExtraHosts: any
        GroupAdd: any
        IpcMode: string
        Cgroup: string
        Links: any
        OomScoreAdj: number
        PidMode: string
        Privileged: boolean
        PublishAllPorts: boolean
        ReadonlyRootfs: boolean
        SecurityOpt: any
        UTSMode: string
        UsernsMode: string
        ShmSize: number,
        Runtime: string
        ConsoleSize: [number, number]
        Isolation: string
        CpuShares: number
        Memory: number
        CgroupParent: string
        BlkioWeight: number
        BlkioWeightDevice: any
        BlkioDeviceReadBps: any
        BlkioDeviceWriteBps: any
        BlkioDeviceReadIOps: any
        BlkioDeviceWriteIOps: any
        CpuPeriod: number
        CpuQuota: number
        CpusetCpus: string
        CpusetMems: string
        Devices: any
        DiskQuota: number
        KernelMemory: number
        MemoryReservation: number
        MemorySwap: number
        MemorySwappiness: number
        OomKillDisable: boolean
        PidsLimit: number
        Ulimits: any
        CpuCount: number
        CpuPercent: number
        IOMaximumIOps: number
        IOMaximumBandwidth: number
    },
    GraphDriver: {
        Name: string
        Data: any
    },
    Mounts: IMount[],
    Config: {
        Hostname: string
        Domainname: string
        User: string
        AttachStdin: boolean
        AttachStdout: boolean
        AttachStderr: boolean
        ExposedPorts: any
        Tty: boolean
        OpenStdin: boolean
        StdinOnce: boolean
        Env: string[]
        Cmd: string[]
        Image: string
        Volumes: any
        WorkingDir: string
        Entrypoint: any
        OnBuild: any
        Labels: any
    }
    NetworkSettings: {
        Bridge: string
        SandboxID: string
        HairpinMode: boolean
        LinkLocalIPv6Address: string
        LinkLocalIPv6PrefixLen: number
        Ports: { string: string },
        SandboxKey: string
        SecondaryIPAddresses: any
        SecondaryIPv6Addresses: any
        EndpointID: string
        Gateway: string
        GlobalIPv6Address: string
        GlobalIPv6PrefixLen: number
        IPAddress: string
        IPPrefixLen: number
        IPv6Gateway: string
        MacAddress: string
        Networks: any
    }
}