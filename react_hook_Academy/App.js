import React , {Component} from "react";
import Counter1 from  "./components/Counter1.js";
import Counter2 from  "./components/Counter2.js";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div id="App_wrap">
        <div className="Counter1">
          <Counter1/>
        </div>
        <div className="Counter2">
          <Counter2/>
        </div>
      </div>
    )
  }
}

export default App;