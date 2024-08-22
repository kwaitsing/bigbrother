// Messages processing engine

import { BSC } from ".."
import { mpu } from "./mpu"
import { socket } from "./socket"

export const MPE = async () => {
    // init var
    let offset = ''
    
    // Fetch msg
    const msgs = await socket('getUpdates', {
        method: 'POST',
        data: {
            ...(offset !== '' ? { offset: offset} : null)
        }
    })
    if (msgs) {
        msgs.result.map(async (msg: any) => {
            offset = msg.update_id
            if (mpu(msg)) {
                // Ban this user
                await socket('banChatMember', {
                    method:'POST',
                    data: {
                        chat_id: BSC.groupID,
                        user_id: msg.from.id,
                        revoke_messages: true
                    }
                })
            }
        })
    }
}