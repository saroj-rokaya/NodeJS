const express = require("express");//initialize express
const app = express();//call express


//define routes
app.get('/',(req,res)=>{
    res.send("this is home");
})


app.get('/about',(req,res)=>{
    res.send("this is about");
})

//start server on port 3000
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})