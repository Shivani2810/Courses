import Card from "./Card";

function Cards({ courses }) {
  console.log("courses:", courses);

  if (!courses) return <div>Loading...</div>;

  const allCourses = [];
  Object.values(courses).forEach((categoryArr) => {
    categoryArr.forEach((course) => allCourses.push(course));
  });

  if (allCourses.length === 0) return <div>No courses found</div>;

  return (
    <div>
      {allCourses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
