const mysql=require("mysql");
const express=require("express");
const routplayer=express();
const connection=mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'sataradb'
});
connection.connect();
routplayer.get("/",function(request,response){
    connection.query(`select * from player`,function(err,result){
        if(err==null)
        { 
    response.contentType("application/json");
    response.send(JSON.stringify(result));
        }else
        {
            response.send("Something went wrong!"); 
        }
    });
});

routplayer.get("/:no",function(request,response){
	let eno=request.params.no; 
		console.log(eno);
	let query=`select * from player where no='${eno}' `;
    connection.query(query,function(err,result){
		console.log(query);
        if(err==null)

        { 
    response.contentType("application/json");
    response.send(JSON.stringify(result));

        }else
        {
            response.send("Something went wrong!"); 
        }
    });
});



routplayer.delete("/:no",function(request,response){
    let eno=request.params.no;
		console.log(eno);
	query=`delete from player where no='${eno}'`;
		console.log(query);
    connection.query(query,function(err,result){
        if(err==null)
        { 
    response.contentType("application/json");
    response.send(JSON.stringify(result));
        }else
        {
            response.send("Something went wrong!"); 
        }
    });
});







routplayer.post("/",function(request,response){
    let eno=request.body.no;
    let ename=request.body.name;
    let ecity=request.body.address;
    connection.query(`insert into player values(${eno},'${ename}','${ecity}')`,function(err,result){
        if(err==null)
        { 
    response.contentType("application/json");
    response.send(JSON.stringify(result));
        }els
        {
            response.send("Something went wrong!"); 
        }
    });
});

routplayer.put("/:no",function(request,response){
    let eno=parseInt(request.params.no);
    let ename=request.body.name;
    let ecity=request.body.address;
    connection.query(`update player set name='${ename}' , address='${ecity}' where no=${eno}`,function(err,result){
        if(err==null)
        { 
    response.contentType("application/json");
    response.send(JSON.stringify(result));
        }else
        {
            response.contentType("application/json");
            response.send(err); 
        }
    });
});

module.exports=routplayer;
