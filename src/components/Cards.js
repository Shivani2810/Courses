import Card from "./Card";

function Cards({ courses }) {

    console.log("courses:", courses);


  if (!courses) {
    return <div>Loading...</div>;
  }

  const getCourses = () => {
    let allCourses = [];

    Object.values(courses).forEach((categoryArr) => {
      categoryArr.forEach((course) => {
        allCourses.push(course);
      });
    });

    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />
      })}
    </div>
  );
}

export default Cards;
