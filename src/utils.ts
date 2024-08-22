// types and interfaces
export interface BootstrapConf {
    botToken: string
    groupID: string[]
    apiDest: string
    queryInterval: number
    file: string
}

export interface socketConf {
    method: string
    data?: {
        [keys: string]: any
    }
}