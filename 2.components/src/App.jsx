import Card from "./component/card"
import Navbar from "./component/navbar"



const App = () => {
  // usage of variable in jsx
  const user="pranay"
  var tech="react.js"
  return (
    <>
    <Navbar/>
    <h1>hello guys I am {user}</h1>
    <h1>i am learning {tech}</h1>
    <Card/>
    <Card/>
    </>
  )
}

export default App 