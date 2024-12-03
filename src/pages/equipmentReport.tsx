import { EquipmentCard } from "@/components/Equipment/Card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

export function EquipmentReport(){
  const { id } = useParams();
  const nav = useNavigate()
  return <div>
    <div className="text-white p-4"><ArrowLeft  onClick={()=>nav('/')}  className="hover:cursor-pointer"/></div>
    <EquipmentCard id={id as string} />
  </div>
}