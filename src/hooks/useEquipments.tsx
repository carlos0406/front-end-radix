import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useEquipments = () => {
  return useQuery( {
    queryKey: ['equipments'],
    retry:false,
    queryFn: async () => {
      const { data } = await api.get('/equipments');
      return data;
    },
  })
};