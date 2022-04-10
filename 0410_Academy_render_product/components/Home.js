import React , {Component} from "react";
import "../css/Home.css";
import Posts from "./Posts.js";

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      NoteBook:[
        {name : "LG그램1" , price : 13000},
        {name : "LG그램2" , price : 23000},
        {name : "LG그램3" , price : 33000},
        {name : "LG그램4" , price : 43000},
        {name : "LG그램5" , price : 53000},
        {name : "LG그램6" , price : 63000},
        {name : "LG그램7" , price : 73000},
        {name : "LG그램8" , price : 83000},
        {name : "LG그램9" , price : 93000},
        {name : "LG그램10" , price : 103000},
      ],
      TV : [
        {name:"삼성TV1",price:15000},
        {name:"삼성TV2",price:25000},
        {name:"삼성TV3",price:35000},
        {name:"삼성TV4",price:45000},
        {name:"삼성TV5",price:55000},
        {name:"삼성TV6",price:65000},
        {name:"삼성TV7",price:75000},
        {name:"삼성TV8",price:85000},
        {name:"삼성TV9",price:95000},
        {name:"삼성TV10",price:105000},
      ],
      // viewTV : true,
      // viewNote:false,
      view : 'NoteBook',
    }
  }

  check_value = (data) => {
    this.setState({
      view : data

    })
  }

  render(){

    return(
      <div id="Home_wrap">
          <div className="select_wrap">
            <div className="viewNoteBook" onClick={()=>this.check_value("NoteBook")}>
              NoteBook
            </div>
            <div className="viewTV" onClick={()=>this.check_value("TV")}>
              TV
            </div>
          </div>
          <div className="DB_Data">
              {
                this.state.view == "NoteBook" && (<Posts Product = {this.state.NoteBook}/>)  
              }
              {
                this.state.view == "TV" && (<Posts Product = {this.state.TV}/>)  
                // this.state.viewNote && <Posts
                // Product = {this.state.TV}
                // />
              }
          </div>
      </div>
    )
  }
}

export default Home;