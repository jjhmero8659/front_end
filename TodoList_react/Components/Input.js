import React ,{Component} from "react";
import "../Css/Input.css";

class Input extends Component{
  constructor(props){
    super(props);

    this.state = {
        today : ""
    }
  }

  add_list = () =>{
    if(this.state.today == ""){
      alert("스케쥴을 입력해주세요")
    }
    else{
      this.props.add_list(this.state.today);
      document.getElementById("input_text").value = "";
      this.setState({
        today:""
      })
    }
  }

  change_state = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  Delete_all = () => {
    this.props.Delete_all();
  }

  render(){

    return(
      <div id="Input_Class_wrap">
        <input id="input_text" type="text" name="today" onChange={this.change_state} placeholder="입력"></input>
        <button className="add" onClick={this.add_list}>추가</button>
        <button className="del_all" onClick={this.Delete_all}>전체삭제</button>
      </div>
    )
  }
}

export default Input;