import {IoIosFilm} from "react-icons/io";
import {CgMenuGridR } from "react-icons/cg";
import { IoMdFilm } from "react-icons/io";
import { BiTv } from "react-icons/bi";

import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Vertical (){
    return(
        <div className="vert">
            
          <Link to="/Film"> <IoIosFilm className="film"/> </Link>
            <Link to= "/menu"> <CgMenuGridR className="menu"/> </Link>
            <Link to="/movie"> <IoMdFilm className="movie"/> </Link>
            <Link to="/tv"><BiTv className="tv"/> </Link>
            <Link to="/bookmark"><BsFillBookmarkFill className="bookm"/> </Link>
        </div>
    
    )
}

export default Vertical