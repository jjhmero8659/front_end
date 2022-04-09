import React , {Component} from "react";
import axios from "axios";
import queryString from "query-string";
import "../css/Search.css";

class Search extends Component{
  constructor(props){
    super(props)

    this.state = {
        bookList:[]
    }
  }

  componentDidMount(){
    const queryObj = queryString.parse(window.location.search)
    //queryString 객체의 내장 메서드 parse 가 
    //window.location.search를 구문 분석 한다.
    //이 안에 어떤 매개변수와 값이 있는지 다 분리해서 분석한다.

    //?searchText="hello" - window.location.search
    //{searchText : "hello"}
    console.log(queryObj)




  }




  render(){
    return(
      <div id="Search_wrap">
          
      </div>
    )
  }
}

export default Search;