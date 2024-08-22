// Init vars
import { MPE } from "./src/mpe";
import type { BootstrapConf } from "./src/utils"

// These are settings, you can configure this prog here
export const BSC: BootstrapConf = {
    botToken: '',
    groupID: [
        ''
    ],
    apiDest: 'https://api.telegram.org',
    queryInterval: 3000, // every 3 seconds
    file: './keywords.txt'
}

// Scan the keyword list and push to this array
export const keywords = (await Bun.file('./keywords.txt').text()).split('\n');

// Run Message Processing Engine every x miSeconds
setInterval(async () => {
    await MPE()
}, BSC.queryInterval);