import React, {useState} from "react";

function InputComp(){

    const [text,setText] = useState("")

  const input_onchange = (e) => {
    setText(e.target.value)
  }

  const searchFunc = () => {
    if(text === "" || text === ' '){
        alert("검색어를 입력하십시오")
        return 0;
    }

    window.location.href="/search?text="+text;
  }

  return(
    <div id="InputComp_wrap">
        <input type="text" placeholder="값을 입력하세요" onChange={input_onchange}></input>
        <button onClick={searchFunc}>검색</button>
    </div>
  )
}

export default InputComp;