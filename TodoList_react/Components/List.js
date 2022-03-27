import React ,{Component} from "react";
import "../Css/List.css";

class List extends Component{
  constructor(props){
    super(props);

    this.state = {
      edit : false,
      today : this.props.today
    }
  }

  Del_list = () =>{
    this.props.Del_list(this.props.num);
  }

  Upt_list = () =>{
    if(this.state.edit == true){
      this.props.Upt_list(this.props.num,this.state.today)
    }
    this.setState({
      edit : !this.state.edit
    })
  }
  Upt_change = (e) =>{
    console.log()
    this.setState({
      [e.target.name] : e.target.value 
    })
  }
  KeyPress = (e) =>{
    if(e.key == "Enter"){
      this.Upt_list();
    }
  }


  render(){
    if(this.state.edit == false){
      return(
        <div id="List_Class_wrap">
          <div className="num">
              {this.props.num}
          </div>
          <div className="schedule">
              {this.props.today}
          </div>
          <div className="delete">
              <button className="upt_btn" onClick={this.Upt_list}>수정</button>
              <button className="del_btn" onClick={this.Del_list}>삭제</button>
          </div>
        </div>
      )
    }
    else{
      return(
        <div id="List_Class_wrap">
          <div className="num">
              {this.props.num}
          </div>
          <div className="schedule">
              <input name="today" type="text" onKeyPress={this.KeyPress}  onChange={this.Upt_change} defaultValue={this.props.today}></input>
          </div>
          <div className="delete">
              <button className="upt_btn" onClick={this.Upt_list}>수정</button>
              <button className="del_btn" onClick={this.Del_list}>삭제</button>
          </div>
        </div>
      )
    }
  }
}

export default List;