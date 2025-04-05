// const Greetings = (props) => {
//   console.log(props)
//   return(
//     <div>
//       <p>Hey you are {props.age + 10} Years Old {props.name} and you are {props.gender}</p>
//     </div>
//   )
// }
// const App = () => {
//   const friends = [{age: 19, name : '89'}]
// const age= 69
//   console.log('Component says hey')
//   return(
//     <div>
//       <p>Hello</p>
//       <Greetings name = 'John' age = {age + 10 } gender = 'Male' />
//     </div>
//   )
// }
//export default App
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}
const Part = (props) => {
  return (
  <>
    <p>
      {props.partName} {props.exerciseNumber}
    </p>
  </>
  )
}
const Content = (props) => {
  let parts = props.course.parts;
  return (
    <>
    <Part partName = {parts[0].name} exerciseNumber = {parts[0].exercises}/>
    <Part partName = {parts[1].name} exerciseNumber = {parts[1].exercises}/>
    <Part partName = {parts[2].name} exerciseNumber = {parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  let parts = props.course.parts;
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}
const App = () => {
  const course = 
  {
    name :'Half Stack application development',
    parts : [
      {
        name : 'Fundamentals of React',
        exercises : 10
      },
      {
        name : 'Using props to pass data',
        exercises : 7
      },
      {
        name :  'State of a component',
        exercises : 14
      }
    ]
  }
  return (
    <div>
      
  console.log(course.name)
      <Header course = {course} />
      <Content course = {course}/>
      <Total  course = {course}/>
    </div>
  )
}

export default App