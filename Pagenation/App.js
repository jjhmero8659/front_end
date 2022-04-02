import React, {Component} from "react";
import "./App.css";
import Posts from "./components/Posts.js";
import PageNation from "./components/PageNation.js";
import Elden_img from "./components/img/Elden_Ring.jpeg";
import Elden_img1 from "./components/img/Elden_Ring1.jpg";
import Elden_img2 from "./components/img/Elden_Ring2.jpg";
import Elden_img3 from "./components/img/Elden_Ring3.jpg";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      posts : [
        {num :1,title : "Post1",image : Elden_img},
        {num :2,title : "Post2",image : Elden_img1},
        {num :3,title : "Post3", image : Elden_img2},
        {num :4,title : "Post4",image : Elden_img3},
        {num :5,title : "Post5",image : Elden_img},
        {num :6,title : "Post6",image : Elden_img1},
        {num :7,title : "Post7",image : Elden_img2},
        {num :8,title : "Post8",image : Elden_img3},
        {num :9,title : "Post9",image : Elden_img},
        {num :10,title : "Post10",image : Elden_img1},
      ],
      CurrentPage:1,
      Posts_per_page:3,
    }
  }

  update_Current_Page = (page) => {
    this.setState({
      CurrentPage : page
    })
  }

  slice_post = (posts) => {
    var indexOfLast = this.state.CurrentPage * this.state.Posts_per_page;
    var indexOfFirst = indexOfLast - this.state.Posts_per_page;
    
    var slice_post = posts.slice(indexOfFirst,indexOfLast);

    return slice_post;
  }

  render(){
    
    console.log(Elden_img)
    // const [posts, currentPage, Posts_per_page] = this.state;
    return(
      <div id="App_wrap">
        {/* <img src={Elden_img}></img> */}
        <Posts
          post = {this.slice_post(this.state.posts)}
        />
        <PageNation
          total_posts_length = {this.state.posts.length}
          Posts_per_page = {this.state.Posts_per_page}
          update_Current_Page = {this.update_Current_Page}
        />
      </div>
    )
  }
}

export default App;