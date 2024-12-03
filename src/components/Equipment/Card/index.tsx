import { useEquipmentReports } from "@/hooks/useEquipmentReport";
import { EquipmentProps } from "..";
import { ReportsAreaChart } from "@/components/charts/chart3";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ban } from "lucide-react";

export function EquipmentCard({
  id,
}: EquipmentProps) {
  const [timeRange, setTimeRange] = useState(24);
  const {data,isLoading, isError } = useEquipmentReports(id,timeRange)
  return (
    <div className="flex flex-col items-center justify-center text-white gap-2 py-4 min-h-[756px]">
      <div className="text-2xl font-bold p-4 ">Equipment {id}</div>
      {isError && <div className="flex flex-row justify-center items-center text-red-600"><Ban/> Error on list equipment report</div> }
      <div className="w-9/12 flex flex-col gap-2">
        <div className="max-w-36">
        <Select value={String(timeRange)} onValueChange={value => setTimeRange(Number(value))}>
          <SelectTrigger className="bg-black border-gray-700 text-white">
            <SelectValue>{`Last ${timeRange / 24} days`}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-black border-gray-700 text-white">
            <SelectItem value="24">Last 24 hours</SelectItem>
            <SelectItem value="48">Last 48 hours</SelectItem>
            <SelectItem value="168">Last 7 days</SelectItem>
            <SelectItem value="720">Last 30 days</SelectItem>
            <SelectItem value="2160">Last 3 months</SelectItem>
          </SelectContent>
        </Select>
        </div>
       
        <ReportsAreaChart medium_value={data?.medium_value??0} reports={data?.reports?? []} isLoading={isLoading} />
      </div>
    </div>
  )

}