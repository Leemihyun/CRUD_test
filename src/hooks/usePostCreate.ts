import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios, {AxiosResponse} from "axios";

const usePostCreate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (post: Post) =>
            axios
                .post('http://localhost:8000/api/post', post)
                .then((res: AxiosResponse) => res.data.data),
        onSuccess: ()=>{
            queryClient.invalidateQueries(({
                queryKey: ['posts']
            }))
        }
    })
}

export default usePostCreate;