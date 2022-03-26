import React , {Component} from "react";
import axios from "axios";
import "../Css/InputComp.css"

class Input extends Component{
  constructor(props){
    super(props);

    this.state = {
      id:"",
      major:"",
      name:""
    }
  }

  addStudentInfo = () =>{
      this.props.addStudentInfo(this.state.id,this.state.major,this.state.name)  //APP 컴포넌트한테 넘겨받은 함수
  }

  inputChange = (e) =>{ //매개변수 event
    // console.log(e.target.value) //event 타겟의 값
    this.setState({
      [e.target.name] : e.target.value, // 이벤트가 발생한 곳이 name 값을 따라가 value 입력
      [e.target.name] : e.target.value,
      [e.target.name] : e.target.value,
    })
  }

  render(){
    return(
      <div id="input-comp">
          <input type="text" placeholder="학번입력" onChange={this.inputChange} name="id"></input>
          <input type="text" placeholder="전공입력" onChange={this.inputChange} name="major"></input>
          <input type="text" placeholder="이름 입력" onChange={this.inputChange} name="name"></input>
          <button onClick={this.addStudentInfo}>추가</button>
      </div>
    )
  }
}

export default Input;