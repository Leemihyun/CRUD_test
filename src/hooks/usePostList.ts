import {useQuery} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios, {AxiosResponse} from "axios";

const usePostList = () => {
    return useQuery<Array<Post>, Error>({
        queryKey: ['posts'],
        queryFn: () =>
            axios
                .get('http://localhost:8000/api/post')
                .then((res: AxiosResponse) => res.data.data)
    })
}

export default usePostList;