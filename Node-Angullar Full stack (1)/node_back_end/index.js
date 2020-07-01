const express=require("express");
const routeemp=require("./route/emp");
const app=express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/player",routeemp);
app.listen(2000,function(){
    console.log("server started..... ");
});
