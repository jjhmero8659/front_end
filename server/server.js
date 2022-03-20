const express = require("express")	

	const app = express()		

	const PORT = process.env.PORT || 4000; 
    const database = require("./database/database.js");

    const bodyParser = require("body-parser")
    app.use(bodyParser.json());


    app.get("/get/list",(req,res)=>{
        database.query("select * from secondhand_car",(err,data)=>{
            if(!err){
                res.send({secondhand_car : data})
            }
            else{
                console.log(err)
            }
        })
    })

    app.post("/post/list",(req,res)=>{
        const name = req.body.name
        const mileage = req.body.mileage
        database.query(`insert into secondhand_car values(NULL,'${name}','${mileage}')`,(err,data)=>{
            if(!err){
                res.send({data:data})
            }
            else{
                console.log(err)
            }
        })
    })

    app.delete("/delete/list:num",(req,res)=>{
        database.query(`delete from secondhand_car where num='${req.params.num}'`,(err,data)=>{
            if(!err){
                res.send({data:data})
            }
            else{
                console.log(err)
            }
        })
    })

	app.listen(PORT, ()=>{ 
    		console.log(`Server On:http://localhost: ${PORT}`)
	})