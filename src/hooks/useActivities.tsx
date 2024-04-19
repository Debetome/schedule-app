import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosCrud } from "../services/crudService";
import useAxiosPrivate from "./useAxiosPrivate";

interface InsertBody {
    title: string
    desc: string
    deadline: Date
}

interface UpdateBody {    
    title?: string
    desc?: string
    deadline?: Date
}

interface UpdateProps {
    activityId: string,
    body: UpdateBody
}

const useActivities = (timelineId: string) => {
    const axiosPrivate = useAxiosPrivate(axiosCrud)
    const queryClient = useQueryClient();
    const queryKey = "activities";

    const { data, isLoading, error } = useQuery({
        queryKey: [queryKey, timelineId],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/activities/list/${timelineId}`);
            return data.activities;
        }
    });

    const insertActivity = useMutation({
        mutationFn: async (data: InsertBody) => await axiosPrivate.post(`/activities/insert/${timelineId}`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey, timelineId] })
    });

    const updateActivity = useMutation({
        mutationFn: async (data: UpdateProps) => {
            const { activityId, body } = data
            await axiosPrivate.put(`/activities/update/?timelineId=${timelineId}&activityId=${activityId}`, body)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey, timelineId] })
    })

    const deleteActivity = useMutation({
        mutationFn: async (activityId: string) => {
            await axiosPrivate.delete(`/activities/delete/?timelineId=${timelineId}&activityId=${activityId}`)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey, timelineId] })
    })

    return { 
        data, 
        insertActivity, 
        updateActivity, 
        deleteActivity, 
        isLoading, 
        error
    }
};

export default useActivities;
