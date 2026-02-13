import Card from "./Card";
import { useState } from "react";

function Cards({ courses }) {
  const [likedCourses, setLikedCourses] = useState([]);

  if (!courses) return <div>Loading...</div>;

  const allCourses = [];
  Object.values(courses).forEach((categoryArr) => {
    categoryArr.forEach((course) => allCourses.push(course));
  });

  if (allCourses.length === 0) return <div>No courses found</div>;

  return (
    <div className="grid grid-cols-3 gap-6 max-w-[1000px] mx-auto">
      {allCourses.map((course) => (
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
