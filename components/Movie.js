import "../css/Movie.css"
function Movie(props){
    return(
        <div id="Movie_wrap">
            <div className="left_side">
                <img src={props.imgSrc}/>
            </div>
            <div className="right_side">
                <div>
                    name : {props.name}
                </div>
                <div>
                    horoscope : {props.horoscope}
                </div>
                <div>
                    Audience_rating : {props.Audience_rating}
                </div>
            </div>
        </div>
    ) 
}

export default Movie;