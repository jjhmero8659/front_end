import React , {Component} from "react";
import axios from "axios";

import jquery from 'jquery';
import Car from "./Component/Car.js";
import $ from 'jquery';
import "./App.css";



class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      List : [],
    }
  }

  componentDidMount(){
    $(function(){    

    });
  }


  get_List = async() =>{
    const res = await axios.get("/get/list")
    this.setState({
      List : res.data.secondhand_car
    })
    console.log(this.state.List)
  }

  post_List = async() =>{
    var input_name = document.getElementById("post_name_text").value
    var input_mileage = document.getElementById("post_mileage_text").value
    const PostObj = {name : input_name, mileage : input_mileage}
    const res = await axios.post("/post/list",PostObj)
    console.log(res.data);
    document.getElementById("post_name_text").value = ""
    document.getElementById("post_mileage_text").value = ""
  }

  delete_List = async() =>{
    const input_num = document.getElementById("delete_num_text").value
    const res = await axios.delete(`/delete/list${input_num}`)
    console.log(res.data);
    document.getElementById("delete_num_text").value = ""
  }

  render(){
    const result = this.state.List.map(
      data => <Car
        num = {data.num}
        name = {data.name}
        mileage = {data.mileage}
      />
    )
    return(
      <div>
        {result}
        <div id="User_area">
            <button id="check_List" onClick={this.get_List}>List 확인</button>
            <input type="text" id = "post_name_text" placeholder="차량 name 값"></input>
            <input type="text" id = "post_mileage_text" placeholder="차량 mileage 값 입력"></input>
            <button id="post_Btn" onClick={this.post_List}>List 추가</button>

            <input type="text" id = "delete_num_text" placeholder="제거할 차량 num 값 입력"></input>
            <button id="delete_Btn" onClick={this.delete_List}>List 제거</button>
        </div>
        
        
      </div>
    )
  }
}

export default App;
