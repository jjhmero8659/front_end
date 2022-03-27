import React , {Component} from "react";
import axios from "axios";
import "../Css/Student.css"

class Student extends Component{
  constructor(props){
    super(props);

    this.state = {
      edit:false,
      id:this.props.id,
      major:this.props.major,
      name:this.props.major,
    }
  }

  Del_StudentInfo = () =>{
      alert("삭제!(Student)")
      this.props.Del_StudentInfo(this.props.id)
  }

  uptStudentInfo = () =>{
    alert("수정")
      
    //수정버튼을 눌러서, 수정 가능 모드 상태가 되고
    //그때 input 창에 입력해서 ,입력된값을 읽어 app.js로 보냄 , 최종 수정
    //수정 불가능 모드일때 수정 버튼을 누르면 ... 그냥 화면만 변경
    if(this.state.edit ==true){
      //edit 이 true 면 수정 가능 모드
      alert("수정할 학번: " + this.props.id)
      alert("수정될 전공: " + this.state.major)
      alert("수정할 이름: " + this.props.name)
      this.props.uptStudentInfo(this.props.id,this.state.major,this.state.name)
      //App.js의 수정함수
    }

    this.setState({ //
      edit : !this.state.edit
  },function(){
    console.log("callback in:"+ this.state.edit)
  }) 
  console.log(this.state.edit)//false
    
}

majorChange = (e) =>{
  this.setState({
    [e.target.name]:e.target.value
  })
}

  render(){
    if(this.state.edit === false){
      return(
        <div id="Student_Class_wrap">
            <div>
                학번 : {this.props.id}
            </div>
            <div>
                전공 : {this.props.major}
            </div>
            <div>
                이름 : {this.props.name}
            </div>
            <div>
                <button onClick={this.Del_StudentInfo}>삭제</button>
                <button onClick={this.uptStudentInfo}>수정</button>
            </div>
        </div>
      )
    }
    else{
      return(
        <div id="Student_Class_wrap">
            <div>
                학번 : {this.props.id}
            </div>
            <div>
                전공 : <input type="text" name="major" onChange={this.majorChange} defaultValue={this.props.major}></input>
            </div>
            <div>
                이름 : {this.props.name}
            </div>
            <div>
                <button onClick={this.Del_StudentInfo}>삭제</button>
                <button onClick={this.uptStudentInfo}>수정</button>
            </div>
        </div>
      )
    }
    
  }
}

export default Student;