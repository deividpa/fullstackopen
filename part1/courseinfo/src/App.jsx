const HeaderCourse = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = ({name, exercises}) => {
  return(
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {

  return(
    parts.map((part, index) => {
      return <Part key={index} name={part.name} exercises={part.exercises} />
    })
  ) 
}

const Total =  ({parts}) => {
  const totalExercises = parts.reduce((accum, currentPart) => {
    return accum + currentPart.exercises
  }, 0)

  return <p>Number of exercises {totalExercises}</p>
}

const App = () => {

  const courseInfo = {
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
      <HeaderCourse course={courseInfo.name} />
      <Content parts={courseInfo.parts} />
      <Total parts={courseInfo.parts} />
    </div>
  )
}

  

export default App
