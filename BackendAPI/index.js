const express=require('express');
const cros=require('cors');
const app=express();
const port=8081;
const bodyParser=require('body-parser');

const userR=require('./routes/userRoute.js')
// const mysql=require('mysql');

// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:'password@123',
//     database:'employee'

// })

app.use(cros());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/User',userR);

// app.get('/User',(req,res)=>{console.log("User Data");
//  res.status(200).json({message:'User data'})
// });
app.listen(port,()=>{
   console.log( `Your application running on  ${port}`)
});