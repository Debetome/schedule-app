import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "../services/crudService";

const queryClient = useQueryClient();
const queryKey = "timelines";

interface MutationBody {
    name: string;    
}

const useTimelines = () => {
    const timelinesQuery = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/timelines/list`);
            return data;
        }
    });

    const newTimelineMut = useMutation({
        mutationFn: async (data: MutationBody) => {
            await axiosPrivate.post(`/timelines/insert`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    });

    return [timelinesQuery, newTimelineMut];
};

export default useTimelines;
