const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("HELLO FROM GOOGLE CLOUD SERVING VERSION 1 ")
})
app.listen(8080,()=>{
    console.log("server started")
})