import React, {useState} from "react";

function Counter2(){

    const [val,setVal] = useState(0);
    
    // reduce = (data) => {
    //     val = data
    // }

    return(
        <div id="Counter2_wrap">
            <div>
                값:{val}
            </div>
            <button onClick={()=>{setVal(val+1)}}>+</button>
            <button onClick={()=>{setVal(val-1)}}>-</button>
        </div>
    )
}

export default Counter2;