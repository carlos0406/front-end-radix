import { EquipmentProps } from ".."
import { EquipmentCard } from "../Card"

type EquipmentContainerProps = {
  equipments: EquipmentProps[]
}
export function EquipmentsContainer({equipments}:EquipmentContainerProps){

  return(
  <div className="py-4 flex flex-row items-center justify-center">
      <div className="w-8/12 flex flex-col gap-4">
        {equipments.map((equipment) => (
          <EquipmentCard key={equipment.id} {...equipment} />
        ))}
      </div>
    </div>
    )
 
}