import React,{Component} from "react";
import axios from "axios"
import Header from "./components/Header.js";
import DropDown from "./components/DropDown.js";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div id="App_wrap">
        <Header/>
        <DropDown/>
      </div>
    )
  }
}

export default App;