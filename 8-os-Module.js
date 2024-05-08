const { clear } = require('console')
const os= require('os')

//info about current user
const user= os.userInfo()

console.log(user)

//Method retunrs the system uptime in secconds 
console.log(`They system uptime is ${os.uptime()/(60*60*24)} days `)


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/(1024*1024*1024),
    freeMem:os.freemem()
}


console.log(currentOS)
