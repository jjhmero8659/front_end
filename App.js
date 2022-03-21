import React, {Component} from "react";
import axios from "axios";
import Img from "./component/Img.js";
import Gpa from "./component/gpa.js";
import Product from "./component/Product.js";
// import Post_list from "./component/Post_list";
import "./App.css"

class App extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      product : []
    }
  }


  get_List = async() => {
    const res = await axios.get("/app/get_List")
    this.setState({
      product : res.data.List
    })
  }

  post_List = async() => {
    const res = await axios.post("/app/post_List")
    console.log(res.data.List)
  }

  render(){
    // const result = this.state.secondhand_car.map(
    //   data => <Car
    //     num = {data.num}
    //     name = {data.name}
    //     mileage = {data.mileage}
    //     accident = {data.mileage}
    //   />
    // )
    return(
      <div id="App_wrap">
        <div className="left_side">
          <Img/>
          <Gpa/>
        </div>
        <div className="right_side">
          
        </div>
      </div>
    )
  }
}

export default App;