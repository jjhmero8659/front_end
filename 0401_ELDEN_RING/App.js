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
      product : [
             {
                 name : "Elden_Ring",
                 Edition : ["normal","Delux"],
                 price : [64800,86800],
             },

             {
                 name : "Dark_soul",
                 Edition : ["Darksoul1","Darksoul2","Darksoul3"],
                 price : [30000,40000,50000],
             }
      ]
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
    const result_product = 
      <Product
        product = {this.state.product}
      />
    
    return(
      <div id="App_wrap">
        <div className="left_side">
          <Img/>
          <Gpa/>
        </div>
        <div className="right_side">
          {result_product}
        </div>
      </div>
    )
  }
}

export default App;