

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
}
const Total = (props) => {
  const parts = props.parts
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
  );
}

function Content(props) {
  const parts = props.parts
  return (
    <>
     <Part part={parts[0]}/>
     <Part part={parts[1]}/>
     <Part part={parts[2]}/>
    </>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
};
export default App;
