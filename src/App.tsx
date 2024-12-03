import { Header } from "./components/header"
import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/home"
import { EquipmentReport } from "./pages/equipmentReport"

function App() {
 
  return (

   <div className="w-full min-h-screen bg-[#171821] ">
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report/:id" element ={<EquipmentReport />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
