import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ course, likedCourses, setLikedCourses }) => {

  const clickHandler = () => {

    setLikedCourses((prev) => {

      // If already liked → remove it
      if (prev.includes(course.id)) {
        toast.warning("Like Removed");
        return prev.filter((cid) => cid !== course.id);
      }

      // If not liked → add it
      toast.success("Liked Successfully");
      return [...prev, course.id];
    });

  };

  return (
    <div className="w-[300px] bg-gray-900 bg-opacity-80 rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">

      {/* Image Section */}
      <div className="relative">
        <img 
          src={course.image.url} 
          alt={course.image.alt} 
          className="w-full h-[180px] object-cover"
        />

        {/* Like Button */}
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] 
        grid place-items-center shadow-md">
          <button onClick={clickHandler}>
            {
                likedCourses.includes(course.id)?
                (<FcLike fontSize="1.75rem" />):
                (<FcLikePlaceholder fontSize="1.75rem" />)
            }
            
            
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>

        <p className="mt-2 text-gray-300 text-sm">
          {
            (course.description.length)>100?
            (course.description.substr(0,100)+"..."):
            (course.description)
          }
        </p>
      </div>

    </div>
  );
};

export default Card;
