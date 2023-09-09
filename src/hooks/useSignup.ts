import axios from "axios";
import {User} from "../types/User.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createUser = async (userInput: User) =>{
　const {data} = await axios.post('http://localhost:8000/api/auth/signup', userInput)
    return data.data
}

const useCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput: User) => createUser(userInput),
        onSuccess: () => {
            queryClient.invalidateQueries(({
                queryKey: ['user']
            }))
        }
    })
}

export default useCreateUser;
