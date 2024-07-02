import { Route, Routes } from "react-router-dom"
import Productss from "./components/Productss"
import UserForm from "./components/UserForm"
import UpdatePage from "./components/UpdatePage"
import DataTableComponent from "./components/DataTable"
import Prime from "./components/Prime"




function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={ <Prime/>} />
      <Route path="/dt" element={ <DataTableComponent/>} />
      <Route path="/product" element={ <Productss/>} />
      <Route path="/update/:id" element={<UpdatePage/>}/>
    </Routes>
     
    </>
  )
}

export default App
