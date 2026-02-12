import { FcLike } from "react-icons/fc";

function Card({course})
{

    console.log("courses:", course);
    return(
       <div>
         

           <div>
            <img src={course.image.url} alt={course.image.alt} ></img>

            <div>
            <button>
                <FcLike/>
            </button>
            </div>

            <div>
                <p>{course.title} </p>
                <p>{course.description} </p>
            </div>

           </div>
       </div>
    )
}
export default Card;