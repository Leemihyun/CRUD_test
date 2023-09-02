import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios, {AxiosResponse} from "axios";

const usePostDetail = (id:string) => {
    return useQuery<Post, Error>({
        queryKey: ['post', id],
        queryFn: () =>
            axios
                .get(`http://localhost:8000/api/post/${id}`)
                .then((res: AxiosResponse) => res.data.data)
    })
}

export default usePostDetail;