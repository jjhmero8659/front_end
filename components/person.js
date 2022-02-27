import "../css/person.css"
function Person(props){
    return(
        <div id="person">
            <div className="left_side">
                <img src={props.imgSrc}/>
            </div>
            <div className="right_side">
                <div>
                    이름:{props.name}<br/>
                </div>
                <div>
                    나이:{props.age}<br/>
                </div>
                <div>
                    키:{props.height}<br/>
                </div>
            </div>
        </div>
    )
}

export default Person;