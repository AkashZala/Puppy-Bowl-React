import Nav from "./Nav"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage"
import PuppyList from "./PuppyList"
import SinglePuppy from "./SinglePuppy"

function App() {


  return (
    <>
      <h1>Puppy-Bowl-React </h1>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/players' element={<PuppyList />} />
        <Route path='/players/:id' element={<SinglePuppy />} />
      </Routes>
    </>
  )
}

export default App
