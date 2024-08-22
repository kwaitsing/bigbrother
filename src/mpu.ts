// Message Processing Unit

import { keywords } from ".."

export const mpu = (msg: any) => {
    let result = false // Do not take action by default
    if (keywords.some((keyword) => {
        msg.message.from.first_name.include(keyword) || msg.message.text.include(keyword)
    })) result = true
    return result
}