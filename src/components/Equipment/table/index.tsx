/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { format, parseISO } from 'date-fns';
import { useNavigate } from "react-router"
const EquipmentTable = ({ equipments }:{equipments:any[]}) => {
  const nav = useNavigate()

  return (
    <Table className=" text-slate-400 shadow-md rounded-lg">
      <TableHeader>
        <TableRow className="table-row">
          <TableCell className="table-header">ID</TableCell>
          <TableCell className="table-header">Description</TableCell>
          <TableCell className="table-header">Created At</TableCell>
          <TableCell className="table-header">Actions</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {equipments.map((equipment:any) => (
          <TableRow
            key={equipment.id}
           
            className="table-row hover:bg-slate-700/50 data-[state=selected]:bg-slate-700"
          >
            <TableCell className="table-cell">{equipment.id}</TableCell>
            <TableCell className="table-cell">{equipment.description}</TableCell>
            <TableCell className="table-cell">
              {format(parseISO(equipment.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </TableCell>
            <TableCell className="table-cell">
              <button className="text-white hover:text-neutral-300" onClick={() => nav(`/report/${equipment.id}`)}>View</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EquipmentTable;