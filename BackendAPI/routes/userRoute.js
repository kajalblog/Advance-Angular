const express=require('express');
const connection=require('../connection.js');
const router=express.Router();

router.get('/All',(req,res)=>{
    console.log('user');
    const query="select * from user";
    connection.query(query,(err,result)=>{
        if(!err)
        {
           return  res.status(200).json({message:'Get All User',data:result})
        }
        else{
            return res.status(500).json(err);
        }
        
            // res.send({
            //     status:200,
            //     message:"All users Data",
            //     data:result
            // })
        
    })

})
router.get('/get/:id',(req,res)=>{
    let quId=req.params.id;
    let query=`select * from user where id=${quId}`;
    connection.query(query,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"Get Single Use Data",
                data:result
            })
        }
        else{
            res.send({
                message:"Data Not found For this id"
            })
        }

    })
})
router.post('/create',(req,res)=>{
    let users=req.body;
    let fullname=req.body.fullname;
    let email=req.body.email;
    let mobile=req.body.mobile
    console.log((users));
    let query=`insert into user(fullname,email,mobile) values('${fullname}','${email}','${mobile}')`;
    connection.query(query,(err,result)=>{
        if(err)
        {
           return  res.send(400).json({Error:err})
            // console.log(err)
        }
        else{
            // return res.send(200).json({message:"data added into database",data:result})
            res.send({
                message:"data added into database",
                data:result
            })
        }
        
            
        
        

    })
})

router.put('/update/:id',(req,res)=>{
    let users=req.body;
    let quId=req.params.id;
    let fullname=req.body.fullname;
    let email=req.body.email;
    let mobile=req.body.mobile
    let query=`update user set fullname='${fullname}',email='${email}',mobile='${mobile}' where id='${quId}'`;
    connection.query(query,(err,result)=>{

        if(err)
        {
            console.log(err);
          return   res.send(400).json({message:err})
        }
        else{
            return  res.send({message:"Data Updated..."})
        }

    })

})
router.delete("/delete/:id",(req,res)=>{
    let uId=req.params.id;
    let query=`delete from user where id='${uId}'`;
    connection.query(query,(err,result)=>{
        if(!err)
        {
            return  res.send({message:"Data deleted..."})
             
        }
        
            console.log(err);
            res.send(400).json({Error:err})
        
    })
})

module.exports=router;