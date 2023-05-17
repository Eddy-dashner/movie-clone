import Words from "./words"
import {BsBookmarksFill} from "react-icons/bs";
function Square(props){
    return(

        <div className='scard' >
            <img className="imge" src={props.image}/>
            <BsBookmarksFill className="bookmark"/>

            <Words/>
            
        </div>
    )
}
export default Square