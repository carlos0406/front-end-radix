import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useEquipmentReports = (equipmentId: string, hours: number = 24) => {
  return useQuery( {
    queryKey: ['equipments_report',equipmentId,hours],
    retry:false,
    queryFn: async () => {
      const { data } = await api.get('/reports', {
        params: {
          equipment_id: equipmentId,
          hours:hours
        }
      });
      return data;
    },
  })
};