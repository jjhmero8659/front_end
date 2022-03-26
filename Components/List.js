import React ,{Component} from "react";
import "../Css/List.css";

class List extends Component{
  constructor(props){
    super(props);
  }

  Del_list = () =>{
    this.props.Del_list(this.props.num);
  }


  render(){

    return(
      <div id="List_Class_wrap">
        <div className="num">
            {this.props.num}
        </div>
        <div className="schedule">
            {this.props.today}
        </div>
        <div className="delete">
            <button onClick={this.Del_list}>삭제하기</button>
        </div>
      </div>
    )
  }
}

export default List;