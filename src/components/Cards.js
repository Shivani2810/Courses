import Card from "./Card";
import { useState } from "react";

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  if (!courses) return <div>Loading...</div>;

  let filteredCourses = [];

  // If category is "All" → flatten everything
  if (category === "All") {
    Object.values(courses).forEach((categoryArr) => {
      categoryArr.forEach((course) => {
        filteredCourses.push(course);
      });
    });
  } 
  // If specific category → show only that category's courses
  else {
    filteredCourses = courses[category] || [];
  }

  if (filteredCourses.length === 0)
    return <div>No courses found</div>;

  return (
    <div className="flex flex-wrap justify-center gap-6 max-w-[1100px] mx-auto">
      {filteredCourses.map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
