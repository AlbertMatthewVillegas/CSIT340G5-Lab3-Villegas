import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import Footer from "./components/Footer";

function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const fullName = "ALBERTMATTHEWVILLEGAS";
  const courseCode = "CSIT340";
  const section = "G5";

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  );
}

export default App;
