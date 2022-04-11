import React,{Component} from "react";
import axios from "axios"
import Header from "./Header.js";
import DropDown from "./DropDown.js";
import Slide_Banner from "./Slide_Banner.js";
import Slick_smallimage from "./Slick_smallimage.js";
import "./css/Home.css";
import Posts from "./PagiNation/Posts.js";
import Change_Post from "./PagiNation/Change_Post.js";





class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
       //Product 전체로 날아온다면 render할때 분류해서 던지자~
      view : "NoteBook",
    }
  }

 componentDidMount(){
 }

 update_view = (data) => {
    this.props.update_view(data)
    this.setState({
      view : data
    })
 }

  render(){
    return(
      <div id="Home_wrap">
        <header>
          <Header/>
        </header>
        <nav>
           <DropDown/>
           <Slide_Banner/>
           <Slick_smallimage/>
        </nav>
        <div>
            <Change_Post
              update_view = {this.update_view}
            />
            {
              this.state.view == "NoteBook" && (<Posts
                  Product = {this.props.NoteBook} //여기서 분류
              />)
            }
            {
              this.state.view == "TV" && (<Posts
                  Product = {this.props.TV}
              />)
            }
        </div>
      </div>
    )
  }
}

export default Home;