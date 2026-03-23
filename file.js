const fs=require('fs')
const os=require('os')
console.log(os.cpus().length)
fs.writeFileSync('./test.txt',"hey there,file is created")

const contacts=fs.readFileSync('./contacts.txt',"utf-8")
console.log(contacts)