import React, {useState} from "react";
import "../css/PagiNation.css";

function PagiNation(props){

    const icon_click = (data) => {
        props.updata_current(data)
    }

    var page = [];
    for(var i=1; i<= Math.ceil(props.Len / props.postPerPage); i++){
        page.push(i);
    }


    var page_icon = page.map(
        (data,index) => (
            <div key={index} className="page" onClick={()=>icon_click(data)}>{data}</div>
        )
    )
  return(
    <div id="PagiNation_wrap">
        {page_icon}
    </div>
  )
}

export default PagiNation;