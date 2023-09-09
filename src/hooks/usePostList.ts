import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios from "axios";

const getPosts = async () =>{
    const {data} =  await  axios.get('http://localhost:8000/api/post')
    return data.data
}

const usePostList = () => {
    return useQuery<Array<Post>, Error>({
        queryKey: ['posts'],
        queryFn: () => getPosts()
            // axios
            //     .get('http://localhost:8000/api/post')
            //     .then((res: AxiosResponse) => res.data.data)
    })
}

export default usePostList;