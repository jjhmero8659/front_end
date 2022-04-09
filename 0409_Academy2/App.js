import React , {Component} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import Search from "./components/Search";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      searchText : ""
    }
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  searchBook = () => {
    alert("검색")
    window.location.href="/search?searchText="+this.state.searchText;
    //전역 객체 window객체의 하부객체 location객체의 href속성 설정
    //href = hyper reference
    //실제 <a href="">의 근본이 여기
  }

  searchtext = (data) => {
    this.setState({
      searchText : data
    })
  }

  render(){
    return(
      <div id="App_wrap">
        <BrowserRouter>
          <input type="text" placeholder="검색어 입력" name="searchText" onChange={this.inputChange}></input>
          <button onClick={this.searchBook}>검색</button>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;