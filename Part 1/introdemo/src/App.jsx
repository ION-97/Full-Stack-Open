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
    <h1>{props.course}</h1>
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
  return (
    <>
    <Part partName = {props.part1} exerciseNumber = {props.exercises1}/>
    <Part partName = {props.part2} exerciseNumber = {props.exercises2}/>
    <Part partName = {props.part3} exerciseNumber = {props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total  total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App