import React , {Component} from "react";
import axios from "axios";
import queryString from "query-string";
import "../css/Search.css";
import Posts from "./Posts.js";
import PagiNation from "./PagiNation.js";

class Search extends Component{
  constructor(props){
    super(props)

    this.state = {
        SearchList:[],
        searchText : "",
        currentPage:1,
        Page_per_page : 3,
        
    }
  }

  componentDidMount(){
    const queryObj = queryString.parse(window.location.search)
    //queryString 객체의 내장 메서드 parse 가 
    //window.location.search를 구문 분석 한다.
    //이 안에 어떤 매개변수와 값이 있는지 다 분리해서 분석한다.

    //?searchText="hello" - window.location.search
    //{searchText : "hello"}
    this.setState({
      searchText : queryObj.searchText
    }
    ,function(){
      this.get_searchbooks()
    })
  }

  get_searchbooks = async() => {
    // const res = await axios.get()
    const res = await axios({
      method :"get",
      url : `/v1/search/book.json?query=${this.state.searchText}`,
      dataType:"json", //json타입으로 받겠다
      headers : {
        "X-Naver-Client-Id" : "fEYF6QIDOLt0OFjbgjRt",
        "X-Naver-Client-Secret":"ytaNRQnkv7"
      }
    })
    // console.log(res.data.items)//안에 데이터 잘들어있다.
    this.setState({
      SearchList : res.data.items,
    })
  }

  slice_books = (books) =>{
    var slice_books = [];
    var indexOfLast = (this.state.currentPage) * (this.state.Page_per_page);
    var indexOfFirst = indexOfLast - this.state.Page_per_page;
    slice_books = books.slice(indexOfFirst, indexOfLast);
    console.log(slice_books)
    return slice_books;
  }
  update_current = (data) => {
    this.setState({
      currentPage : data
    })
  }


  render(){

    const result = this.slice_books(this.state.SearchList).map(
      (data,index) => (<Posts
          key={index}
          title = {data.title}
          image = {data.image}
          description = {data.description}
      />)
  )

    return(
      <div id="Search_wrap">
          {result}
          <PagiNation
            total_list = {this.state.SearchList.length}
            currentPage = {this.state.currentPage}
            Page_per_page = {this.state.Page_per_page}
            update_current = {this.update_current}
         />
      </div>
    )
  }
}

export default Search;