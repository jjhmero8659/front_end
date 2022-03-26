import React , {Component} from "react";
import axios from "axios";
import "../Css/Student.css"

class Student extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  Del_StudentInfo = () =>{
      alert("삭제!(Student)")
      this.props.Del_StudentInfo(this.props.id)
  }

  render(){
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
              <button onClick={this.Update_StudentInfo}>수정</button>
          </div>
      </div>
    )
  }
}

export default Student;