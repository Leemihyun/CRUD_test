import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios from "axios";

const getPostById = async (id:string) =>{
    const {data} =  await  axios.get(`http://localhost:8000/api/post/${id}`)
    return data.data
}

const usePostDetail = (id:string) => {
    return useQuery<Post, Error>({
        queryKey: ['post', id],
        queryFn: () => getPostById(id)
            // axios
            //     .get(`http://localhost:8000/api/post/${id}`)
            //     .then((res: AxiosResponse) => res.data.data)
    })
}

export default usePostDetail;