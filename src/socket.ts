import { logger } from "toolbx"
import { BSC } from ".."
import type { socketConf } from "./utils"

export const socket = async (api: string, opt: socketConf) => {
    let resp
    try {
        resp = await fetch(
            `${BSC.apiDest}/bot${BSC.botToken}/${api}`,
            {
                method: opt.method,
                headers: {
                    ...(opt.data && { 'Content-Type': 'application/json' })
                },
                ...(opt.data && { body: JSON.stringify(opt.data) })
            }
        )
    } catch (error) {
        logger(`> Error when trying to communicate with ${BSC.apiDest}/${BSC.botToken}/${api}`, 2)
    }
    return resp ? resp.json() : null
}