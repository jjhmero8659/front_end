import React , {Component} from "react";
import "../css/Search.css";
import queryString from "query-string";

class Search extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
      console.log(window.location.search)
      const queryObj = queryString.parse(window.location.search)
      //queryString 객체의 내장 메서드 parse 가 
      //window.location.search를 구문 분석 한다.
      //이 안에 어떤 매개변수와 값이 있는지 다 분리해서 분석한다.

      //?searchText="hello" - window.location.search
      //{searchText : "hello"}

      
      console.log(queryObj)
      console.log(queryObj.searchText)
  }

  render(){
    return(
      <div id="Search_wrap">
          SEARCH
      </div>
    )
  }
}

export default Search;