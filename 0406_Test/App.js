import React,{Component} from "react";
import axios from "axios"
import Header from "./components/Header.js";
import DropDown from "./components/DropDown.js";
import Slide_Banner from "./components/Slide_Banner.js";
import Slick_smallimage from "./components/Slick_smallimage.js";
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
        <header>
          <Header/>
        </header>
        <nav>
          <DropDown/>
          <Slide_Banner/>
          <Slick_smallimage/>
        </nav>
        <nav>
          
        </nav>
        
      </div>
    )
  }
}

export default App;