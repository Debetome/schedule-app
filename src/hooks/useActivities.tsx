import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "../services/crudService";

const queryClient = useQueryClient();
const queryKey = "activities";

interface UseActivitiesProps {
    timelineId: string;
}

interface MutationBody {
    title: string;
    desc: string;
    deadline: Date;
}

const useActivities = (props: UseActivitiesProps) => {
    const activitiesQuery = useQuery({
        queryKey: [queryKey, props.timelineId],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/activities/list/${props.timelineId}`);
            return data;
        }
    });

    const newActivityMut = useMutation({
        mutationFn: async (data: MutationBody) => {
            await axiosPrivate.post(`/activities/insert/${props.timelineId}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey, props.timelineId] });
        }
    });

    return [activitiesQuery, newActivityMut];
};

export default useActivities;
