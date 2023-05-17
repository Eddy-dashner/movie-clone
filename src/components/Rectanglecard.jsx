import Words from "./words"
import {BsBookmarksFill} from "react-icons/bs";
function Rectanglecard(props){
    return(

        <div className='rcard' >
            <img className="imge" src={props.image}/>
            <BsBookmarksFill className="bookmark"/>

            <Words/>
            
        </div>
    )
}
export default Rectanglecard