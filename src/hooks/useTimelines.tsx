import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosCrud } from "../services/crudService";
import useAxiosPrivate from "./useAxiosPrivate";

interface MutationBody {
    name: string
}

const useTimelines = () => {
    const axiosPrivate = useAxiosPrivate(axiosCrud)    
    const queryClient = useQueryClient()
    const queryKey = "timelines"    

    const { data } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {            
            const { data } = await axiosPrivate.get(`/timelines/list`)
            return data.timelines
        }
    });
    
    const newTimelineMut = useMutation({
        mutationFn: async (data: MutationBody) => await axiosPrivate.post(`/timelines/insert`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] })
    })

    return [data, newTimelineMut]
}

export default useTimelines;
