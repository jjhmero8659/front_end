const express = require("express")	//express 요청

const app = express()		//express 요청 값 저장

const PORT = process.env.PORT || 4000; //PORT 번호 저장 , PORT번호는 4000번 또는 자동
const bodyParser = require("body-parser")
app.use(bodyParser.json());

var List = [
  {name : "정채연" , age : 22 , grade : "2"},
  {name : "아이린" , age : 27 , grade : "4"},
  {name : "아린" , age : 24 , grade : "3"},
  {name : "아이유" , age : 26 , grade : "4"},
  {name : "은하" , age : 23 , grade : "3"}
]

app.get("/get_name",(req,res) =>{
  var name_arr = [];

  for(var i=0; i<List.length; i++){
    name_arr.push(List[i].name);
  }
  console.log(name_arr);
  res.send({name_array : name_arr});
})

app.get("/get_age",(req,res) =>{
  var age_arr = [];

  for(var i=0; i<List.length; i++){
    age_arr.push(List[i].age);
  }
  console.log(age_arr);
  res.send({age_array : age_arr});
})

app.get("/get_array",(req,res) =>{
  res.send({Array : List});
})

app.delete("/get_delete",(req,res) =>{
  List.splice(0);
  res.send({Array : List});
})

app.post("/get_post",(req,res) =>{
  List.push(req.body)
  res.send({Array : List});
})

app.patch("/get_patch:name",(req,res) =>{
  for(var i=0; i<List.length; i++){
    if(List[i].name == "정채연"){
      List[i].name = "아이유";
    }
  }
  res.send({Array : List});
})



app.listen(PORT, ()=>{ //포트 listen
    	console.log(`Server On:http://localhost: ${PORT}`)
})