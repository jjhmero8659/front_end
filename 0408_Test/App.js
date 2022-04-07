import React,{Component} from "react";
import axios from "axios"
import Header from "./components/Header.js";
import DropDown from "./components/DropDown.js";
import Slide_Banner from "./components/Slide_Banner.js";
import Slick_smallimage from "./components/Slick_smallimage.js";
import "./App.css";
import PagiNation from "./components/PagiNation/PagiNation.js";
import Posts from "./components/PagiNation/Posts.js";
import Product_slick from "./components/PagiNation/Product_slick.js";




class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      Posts_arr : [],
      Product : [],
      Current_page : 1,
      Page_per_page:3,
    }
  }

  update_current_page = (data) => {
    this.setState({
      Current_page : data,
    })
  }

  get_Movie = async() => {
    const result = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({
      Posts_arr : result.data.data.movies
    },
    function(){
      // console.log(this.state.Posts_arr)
    })
  }

  get_product = async() => {
    alert("product")
    const res = await axios.get('/api/get/get_product');
    // console.log("result", result)
    this.setState({
      // Product : result.data.data.movies
    })
  }

 componentDidMount(){
   this.get_Movie();
   this.get_product();
 }

  render(){
    var slice_array = [];
    var indexOfLast = (this.state.Current_page) * (this.state.Page_per_page);
    var indexOfFirst = (indexOfLast) - this.state.Page_per_page;
    
    slice_array = this.state.Posts_arr.slice(indexOfFirst,indexOfLast);
    console.log("slice_array : ",slice_array);

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
        <div>
            <Product_slick/>
            <Posts
                Slice_Posts_arr = {slice_array}
            />
            <PagiNation
                    Total_page = {this.state.Posts_arr.length}
                    Current_page = {this.state.Current_page}
                    Page_per_page = {this.state.Page_per_page}
                    update_current_page = {this.update_current_page}
            />
            <button onClick={this.get_product}>버튼</button>
        </div>
        
      </div>
    )
  }
}

export default App;