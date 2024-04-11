import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosCrud } from "../services/crudService";
import useAxiosPrivate from "./useAxiosPrivate";

interface MutationBody {
    title: string;
    desc: string;
    deadline: Date;
}

const useActivities = (timelineId: string) => {
    const axiosPrivate = useAxiosPrivate(axiosCrud)
    const queryClient = useQueryClient();
    const queryKey = "activities";

    const activitiesQuery = useQuery({
        queryKey: [queryKey, timelineId],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/activities/list/${timelineId}`);
            return data;
        }
    });

    const newActivityMut = useMutation({
        mutationFn: async (data: MutationBody) => {
            await axiosPrivate.post(`/activities/insert/${timelineId}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey, timelineId] });
        }
    });

    return [activitiesQuery, newActivityMut];
};

export default useActivities;
