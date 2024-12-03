import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";

export function Header(){
  const nav = useNavigate()
  return (
    <div className="border-b-white border-b-[1px] text-white text-center py-4 text-2xl font-bold w-full">
     <div className="flex justify-center items-center gap-4 hover:cursor-pointer" onClick={()=>nav("/")}> Equipments Report <TrendingUp/></div>
    </div>
  )
}