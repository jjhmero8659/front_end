import React , {Component} from "react";
import axios from "axios";
import "../css/Home.css";
import Posts from "./Posts.js";

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
        books : [],
        currentPage:1,
        Page_per_page : 3,
    }
  }

  componentDidMount(){
      this.get_books();
  }

  get_books = async() => {
    // const res = await axios.get()
    const res = await axios({
      method :"get",
      url : `/v1/search/book.json?query=${"과학"}`,
      dataType:"json", //json타입으로 받겠다
      headers : {
        "X-Naver-Client-Id" : "fEYF6QIDOLt0OFjbgjRt",
        "X-Naver-Client-Secret":"ytaNRQnkv7"
      }
    })
    console.log(res.data.items)//안에 데이터 잘들어있다.

    this.setState({
      books : res.data.items,
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

  render(){
    const result = this.slice_books(this.state.books).map(
        (data,index) => (<Posts
            key={index}
            title = {data.title}
            image = {data.image}
            description = {data.description}
        />)
    )
    return(
      <div id="Home_wrap">
         {result}
      </div>
    )
  }
}

export default Home;