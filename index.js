
const express=require('express')
let mock_data = require('./mockdata');

const app=express()

app.get('/',(req,res)=>{
    return res.send("welcome to home")
})

app.get('/about',(req,res)=>{
    return res.send("welcome to about page")
})


//Routes:

// get Users

app.get('/users',(req,res)=>{
    return res.json(mock_data)
})





app.get('/api/users',(req,res)=>{
    return res.json(mock_data)
})

//get User with given id



app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    console.log(`id is ${id}`)
    const user=mock_data.find(user=>user.id===id)
    return res.json(user)
})

//post request

app.post('/api/users',(req,res)=>{

    const newUser={id:mock_data.length+1,name:"john",email:"john@gmail.com"}
    mock_data[mock_data.length]=newUser
    return res.json(newUser)
})

app.patch('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const user=mock_data.find(user=>user.id===id)
    user.job_title="abc@gmail.com"
    return res.json(user)
})
app.delete('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    let l1=mock_data.length
    mock_data=mock_data.filter(user=>user.id!==id)
    let l2=mock_data.length
    return res.json({len1:l1,len2:l2})
   
})


app.listen(8000,()=>{
    console.log("server started at port 8000")
}) 