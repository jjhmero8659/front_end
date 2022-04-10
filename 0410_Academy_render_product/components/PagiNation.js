import React , {Component} from "react";
import "../css/PagiNation.css";


class PagiNation extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  updata_current = (data) => {
      this.props.updata_current(data);
  }

  render(){
    var page = [];
    for(var i=1; i<= Math.ceil((this.props.total_length)/(this.props.Page_Per_page)); i++){
        page.push(i);
    }
    var icon = page.map(
        (data,index) => (
            <div key={index} className="page_icon" onClick={()=>this.updata_current(data)}>{data}</div>
        )
    )
    return(
      <div id="PagiNation_wrap">
          {icon}
      </div>
    )
  }
}

export default PagiNation;