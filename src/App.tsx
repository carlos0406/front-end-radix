import { LoaderCircle } from "lucide-react"
import { EquipmentsContainer } from "./components/Equipment/Container"
import { Header } from "./components/header"
import { useEquipments } from "./hooks/useEquipments"

function App() {
  const {data,isLoading,isError} = useEquipments() 
  return (

   <div className="w-full min-h-screen bg-[#171821] ">
      <Header/>
      <div className="w-full flex items-center justify-center pt-4">
        {isLoading && <LoaderCircle  className="animate-spin" color="white" size={42} />}
      </div>
      {!isLoading && !isError && data && (
        <EquipmentsContainer equipments={data.equipments} />
      )}
   </div>
  )
}

export default App
