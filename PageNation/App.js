import React , {Component} from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts.js";
import PagiNation from "./components/PagiNation.js";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts:[
        {id : 1 , title: "Post1"},
        {id : 2 , title: "Post2"},
        {id : 3 , title: "Post3"},
        {id : 4 , title: "Post4"},
        {id : 5 , title: "Post5"},
        {id : 6 , title: "Post6"},
        {id : 7 , title: "Post7"},
        {id : 8 , title: "Post8"},
        {id : 9 , title: "Post9"},
        {id : 10 , title: "Post10"},
      ],
      currentPage:1,
      postsPerPage:3
    }
  }
  setCurrentPage = (page) =>{
    alert("hihi Page : " + page)
    this.setState({
      currentPage : page
    })
  }

  currentPosts = (posts) => {
    const indexOflast = (this.state.postsPerPage) * (this.state.currentPage);
    const indexOfFirst = indexOflast - (this.state.postsPerPage);
    //현재 페이지 번호를 이용해서 글 몇개만 추출해서 반환한다.
    const slicePosts = posts.slice(indexOfFirst,indexOflast)
    //posts 배열에서 indexOfFirst 부터 indexOflast 까지 추출한다
    return slicePosts;
  }

  render(){
    return(
      <div id="App_wrap">
        <Posts
          posts = {this.currentPosts(this.state.posts)}
        />
        <PagiNation
          total_Posts = {this.state.posts.length}
          postsPerPage = {this.state.postsPerPage}
          setCurrentPage = {this.setCurrentPage}
        />
      </div>
    )
  }
}

export default App;
