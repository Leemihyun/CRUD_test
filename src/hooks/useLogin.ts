import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {User} from "../types/User.ts";

const loginUser = async (userInput: User) => {
    const {data} = await axios.post('http://localhost:8000/api/auth/login', userInput)
    return data.data
}

const useLoginUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (userInput: User) => loginUser(userInput),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)

            queryClient.invalidateQueries(({
                queryKey: ['user']
            }))
        }
    })
}

export default useLoginUser;