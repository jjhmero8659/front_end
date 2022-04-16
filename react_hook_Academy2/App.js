import axios from "axios";
import React , {useState} from "react";
import "./App.css";
import axios from "axios";
import InputComp from "./components/InputComp.js";

function App(){
  
  const [plan_list , setList] = useState([

  ]) 

  const get_list = async() => {
    const res = await axios.get("/app/get_list");
  }


  // useEffect(() => {
  //   const res = await axios.get("/app/get_list");
  //   setList(
  //     res.data
  //   )
  // }, []);
  

  return(
    <div id="App_wrap">
        <InputComp/>
        <button onClick={get_list}>리스트 가져오기</button>
    </div>
  )
}

export default App;
