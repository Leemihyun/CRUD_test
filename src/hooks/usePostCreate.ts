import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "../types/Post.ts";
import axios from "axios";

const createPost = async ( userInput: Post)=> {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    const {data} =  await  axios.post('http://localhost:8000/api/post', userInput, config)
    return data.data
}

const usePostCreate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput: Post) => createPost( userInput),
            // axios
            //     .post('http://localhost:8000/api/post', post)
            //     .then((res: AxiosResponse) => res.data.data),
        onSuccess: ()=>{
            // 캐시 새로고침, 지정한 key를 가진 모든 캐시를 새로고침 = 정보 업데이트
            queryClient.invalidateQueries(({
                queryKey: ['posts']
            }))
        }
    })
}

export default usePostCreate;