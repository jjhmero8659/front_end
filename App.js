import React , {Component} from "react";
import axios from "axios";
import Children from "./Movie/movie.js";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      Movie_List : [],
    }
  }

  componentDidMount(){
    this.getMovie();
  }

  getMovie = async() =>{
    const list = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(list)
    this.setState({
      Movie_List : list.data.data.movies,
    })
  }
  

  render(){
    const deliver = this.state.Movie_List.map(
      data => <Children
        title = {data.title}
        large_cover_image = {data.large_cover_image}
        summary = {data.summary}
      >
      </Children>
      ) 
    return(
      <div className="App_wrap">
        {deliver}
      </div>
    )
  }
}

export default App;
