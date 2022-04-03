import React,{Component} from "react";
import "./css/DropDown.css";

class DropDown extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div id="DropDown_wrap">
        <ul className="gnb">
            <li><a>생활가전</a></li>
        </ul>
      </div>
    )
  }
}

export default DropDown;