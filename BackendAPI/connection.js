const mysql=require("mysql");
require("dotenv").config();

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'password@123',
    database:'employee'

})

connection.connect((err)=>{
    if(!err)
    {

        console.log("Database Connection succefull");
    }
    else{
        // console.log(connection);
        console.log("Connection failed");
    }
})
module.exports=connection;