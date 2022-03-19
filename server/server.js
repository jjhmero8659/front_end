
const express = require("express");
const app = express()
const PORT = process.env.PORT || 4000;

const database = require("./config/db.js")

//const database = require("./config/db1.js") //db 다중

//const database = require("./config/db2.js")


app.get("/api/get/personAll",(req,res) =>{
  console.log("/api/get/personAll");
  database.query("select * from person",(err,data) => {//연결된 db를 실행하겠다
    if(!err){ // 오류가 없다면?
      res.send({db_data : data});
    }
    else{ // 오류가 있다면?
      console.log(err)
    }
  }) 
})

app.get("/api/get/personWhere:name",(req,res) =>{

  const name = req.params.name
  database.query(`select * from person where name='${name}'`,(err,data) => {//연결된 db를 실행하겠다
    if(!err){ // 오류가 없다면?
      res.send({db_data : data}); // res 와 console 중복 사용시 에러 발생
    }
    else{ // 오류가 있다면?
      console.log(err)
    }
  }) 
})

app.post("/api/add/person:name&:age&:height",(req,res) =>{
  console.log("/api/add/person:name&:age&:height")
  const name = req.params.name
  const age = req.params.age
  const height = req.params.height

  database.query(`insert into person values('${name}','${age}','${height}')`,(err,data) => {//연결된 db를 실행하겠다
    if(!err){ // 오류가 없다면?
      res.send({info : data})
    }
    else{ // 오류가 있다면?
      console.log(err)
    }
  }) 
})

app.patch("/api/update/person:name&:height",(req,res) =>{
  const name = req.params.name
  const height = req.params.height

  database.query(`update person set height=${height} where name='${name}'`,(err,data) => {//연결된 db를 실행하겠다
    if(!err){ // 오류가 없다면?
      res.send({info : data})
    }
    else{ // 오류가 있다면?
      console.log(err)
    }
  }) 
})

app.delete("/api/update/person:name",(req,res) =>{
  const name = req.params.name

  database.query(`delete from person where name="${name}"`,(err,data) => {//연결된 db를 실행하겠다
    if(!err){ // 오류가 없다면?
      res.send({info : data})
    }
    else{ // 오류가 있다면?
      console.log(err)
    }
  }) 
})

app.listen(PORT,()=>{
  console.log(`Server On : http://localhost:${PORT}`)
})