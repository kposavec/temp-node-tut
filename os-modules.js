const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in second

console.log(`This System Uptime is:${os.uptime()/60} min`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);