import React, {Component} from "react";
import "./css/PageNation.css";

class PageNation extends Component{
  constructor(props){
    super(props)

    this.state = {
      page : []
    }
  }
  page_button = (data) =>{
      this.props.update_Current_Page(data)
  }

  render(){
    var page_number = [];
    for(var i=1; i<=Math.ceil((this.props.total_posts_length) / (this.props.Posts_per_page)); i++){
        page_number.push(i);
    }
    const result = page_number.map(
        (data,index) => (
            <div key={index} className="page" onClick={()=>this.page_button(data)}>{data}</div>
        )
    )
    return(
      <div id="PageNation_wrap">
          {result}
      </div>
    )
  }
}

export default PageNation;