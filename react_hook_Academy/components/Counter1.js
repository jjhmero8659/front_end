import React , {Component} from "react";


class Counter1 extends Component{
  constructor(props){
    super(props)

    this.state = {
        val : 0
    }
  }

  add = () => {
      this.setState({
          val : this.state.val+1
      })
  }

  reduce = () => {
    if(this.state.val > 0){
        this.setState({
            val : this.state.val-1
        })
    }
}

  render(){
    return(
      <div id="Counter1_wrap">
          <div>
              값{this.state.val}
          </div>
          <button onClick={this.add}>+</button>
          <button onClick={this.reduce}>-</button>
      </div>
    )
  }
}

export default Counter1;