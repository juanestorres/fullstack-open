const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p> <strong>total of {sum} exercises </strong> </p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {
      parts.map(part => <Part key={part.id} part={part}></Part>)
    }

  </>

const total = (parts) => parts.reduce((sum, part) =>  sum + part.exercises,0)

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total sum={total(course.parts)}></Total>
    </>
  )
}

export default Course