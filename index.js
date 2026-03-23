
require('dotenv').config()
const {add,product}=require('./math')


console.log(`Hi I am ${process.env.NAME}, i am a ${process.env.PROFESSION} and i am gonna start ${process.env.COURSE} `)

console.log(add(4,6))
console.log(product(4,6))

