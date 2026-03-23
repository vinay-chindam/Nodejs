const fs=require('fs')
fs.writeFileSync('./test.txt',"hey there,file is created")

const contacts=fs.readFileSync('./contacts.txt',"utf-8")
console.log(contacts)