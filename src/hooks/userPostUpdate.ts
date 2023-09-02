import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios, {AxiosResponse} from "axios";

const userPostUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (post: Post) =>
            axios
            .patch(`http://localhost:8000/api/post/${post.id}`, post)
            .then((res: AxiosResponse) => res.data.data),
        onSuccess: () => {
            queryClient.invalidateQueries(({
                queryKey: ['posts']
            }))
        }
    })
}

export default userPostUpdate;