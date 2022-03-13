import React, {Component} from "react";
import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  get_name = async() => {
    const res = await axios.get("/get_name");
    console.log("name : ",res.data.name_array);
  }

  get_age = async() => {
    const res = await axios.get("/get_age");
    console.log("age : ",res.data.age_array);
  }

  get_array = async() => {
    const res = await axios.get("/get_array");
    console.log("List : ",res.data.Array);
  }

  get_delete = async() => {
    const res = await axios.delete("/get_delete");
    console.log("List : ",res.data.Array);
  }

  get_post = async() => {
    var post_json = {
      name : "정채연" , 
      age : 22 , 
      grade : "2"
    }
    const res = await axios.post("/get_post",post_json);
    console.log("List : ",res.data.Array);
  }

  get_patch = async() => {
    const res = await axios.patch("/get_patch"+"정채연");
    console.log("List : ",res.data.Array);
  }

  render(){
    return(
      <div>
        <button onClick={this.get_name}>get_name</button>
        <button onClick={this.get_age}>get_age</button>
        <button onClick={this.get_array}>get_array</button>
        <button onClick={this.get_delete}>get_delete</button>
        <button onClick={this.get_post}>get_post</button>
        <button onClick={this.get_patch}>get_patch</button>
      </div>
    )
  }
}

export default App;