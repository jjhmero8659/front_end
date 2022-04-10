import React , {Component} from "react";
import "../css/PagiNation.css";

class PagiNation extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  update_current = (data) => {
    this.props.update_current(data);
  }

  render(){
    var page_list = [];
    for(var i=1; i<= Math.ceil((this.props.total_list)/(this.props.Page_per_page)); i++){
        page_list.push(i)
    }

    var page_icon = page_list.map(
        (data,index) => (
            <div key={index} onClick={() => this.update_current(data)} className="page_icon">{data}</div>
        )
    )

    console.log("page_list",page_list);
    return(
      <div id="PagiNation_wrap">
          {page_icon}
      </div>
    )
  }
}

export default PagiNation;