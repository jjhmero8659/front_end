const express = require("express")	//express 요청
const database = require("./database/db.js")

const app = express()		//express 요청 값 저장

const PORT = process.env.PORT || 4000; //PORT 번호 저장 , PORT번호는 4000번 또는 자동
const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.get("/app/get_List",(req,res)=>{
  database.query("select * from product",(err,data)=>{
    if(!err){
      res.send({List:data})
    }
    else{
      console.log(err);
    }
  })
})



app.listen(PORT, ()=>{ //포트 listen
    	console.log(`Server On:http://localhost: ${PORT}`)
})