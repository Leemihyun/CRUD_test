import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {User} from "../types/User.ts";

const getProfile = async () => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const {data} = await axios.get('http://localhost:8000/api/auth', config)
    return data.data
}

const useGetUserProfile = () => {
    return useQuery<Array<User>, Error>({
        queryKey: ['user'],
        queryFn: () => getProfile()
    })
}

export default useGetUserProfile;