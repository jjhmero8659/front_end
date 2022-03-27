import React , {Component} from "react";
import axios from "axios";
import "./App.css";

import Student from "./Component/Student.js"
import InputComp from "./Component/InputComp.js"

class App extends Component{
  constructor(props){
    super(props);

    this.state = { 
      studentList : [
        {id:"2018038018",major:"컴퓨터 공학과",name:"정채연"},
        {id:"2017038018",major:"시각 디자인과",name:"아린"},
        {id:"2020183515",major:"전자 공학과",name:"아이유"},
      ]
    }
  }

  addStudentInfo = (input_id,input_major,input_name) =>{
    var Student_Obj = {
      id : input_id,
      major : input_major,
      name : input_name,
    }
    this.setState({ // 상태 값에 추가
      studentList:this.state.studentList.concat(Student_Obj) //push는 값 반환 x concat 는 반환
    })
    
  }

  Del_StudentInfo = (del_id)=>{
    const filteredList = this.state.studentList.filter(
      (data) => (data.id !== del_id)
    )
    this.setState({ //통과된 데이터로 새로운 배열 생성
      studentList : filteredList
    })
  }

  uptStudentInfo = (id,major,name) => {
    alert("수정함수(APP)")
    alert("App에 넘어온 학번"+id)
    alert("App에 넘어온 전공"+major)
    alert("App에 넘어온 전공"+name)

    const updateStudentObj = {id:id,major:major,name:name};
    const updateStudentList = this.state.studentList.map(//3점연산자 (three dot operators)
      (data) => (data.id == id) ? ({...data,...updateStudentObj}) : (data)
    )
    this.setState({
      studentList : updateStudentList
    })
    
  }

  render(){
    const result = this.state.studentList.map(
        (data,index) => <Student
          key = {index}
          id = {data.id}
          major = {data.major}
          name = {data.name}
          Del_StudentInfo = {this.Del_StudentInfo}
          uptStudentInfo = {this.uptStudentInfo}
        />
      )
    return(
      <div id="App_Class_wrap">
        <InputComp addStudentInfo={this.addStudentInfo}/>
        {result}
      </div>
    )
  }
}

export default App;