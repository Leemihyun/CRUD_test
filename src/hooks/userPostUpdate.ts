import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios, {AxiosResponse} from "axios";

const updateById = async (id: string, updateData: Post ) => {
    const {data} = await axios.patch(`http://localhost:8000/api/post/${id}`, updateData)
    return data.data
}

const userPostUpdate = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: (updateData: Post) => updateById(updateData.id,updateData),
            // axios
            // .patch(`http://localhost:8000/api/post/${post.id}`, post)
            // .then((res: AxiosResponse) => res.data.data),
        onSuccess: () => {
            queryClient.invalidateQueries(({
                queryKey: ['posts']
            }))
        }
    })
}

export default userPostUpdate;