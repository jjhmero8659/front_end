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
    this.props.add_list(this.state.today);
    document.getElementById("input_text").value = "";
  }

  change_state = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  render(){

    return(
      <div id="Input_Class_wrap">
        <input id="input_text" type="text" name="today" onChange={this.change_state} placeholder="입력"></input>
        <button onClick={this.add_list}>ADD</button>
      </div>
    )
  }
}

export default Input;