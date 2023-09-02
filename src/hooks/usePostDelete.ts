import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";

const usePostDelete = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string) =>
            axios
                .delete(`http://localhost:8000/api/post/${id}`)
                .then((res: AxiosResponse) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(({
                queryKey: ['posts']
            }))
        }
    })
}

export default usePostDelete;