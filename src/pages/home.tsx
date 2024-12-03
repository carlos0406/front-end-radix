import EquipmentTable from "@/components/Equipment/table"
import { useEquipments } from "@/hooks/useEquipments"
import { Ban, LoaderCircle } from "lucide-react"




export function Home(){

  const {data,isLoading,isError} = useEquipments() 
  return(
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="w-8/12 flex flex-col gap-4 rounded-md border-white border-2 pb-4">
      
        <div className="w-full flex items-center justify-center pt-4">
          {isLoading && <LoaderCircle  className="animate-spin" color="white" size={42} />}
          {isError && <div className="flex flex-row justify-center items-center text-red-600"><Ban/> Error on list equipment report</div> }
        </div>
        
        {!isLoading && !isError && data&& <EquipmentTable equipments={data?.equipments?? []} />}
      </div>
    </div>
  )
 
}