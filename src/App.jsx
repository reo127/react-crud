import { Route, Routes } from "react-router-dom"
import Productss from "./components/Productss"
import UpdateProd from "./components/UpdateProd"
import UserForm from "./components/UserForm"




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Productss/>} />
        <Route path="/update/:id" element={<UpdateProd/>} />
      </Routes>
      
    </>
  )
}

export default App
