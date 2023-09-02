import {useNavigate, useParams} from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail.ts";
import usePostDelete from "../hooks/usePostDelete.ts";

const PostDetailView = () => {
    const navigate = useNavigate()
    const { id} = useParams<{id: string}>()
    const {isLoading, isSuccess, data, error} = usePostDetail(id);
    const { mutateAsync} = usePostDelete()

    const handleDelete = async () => {
        // 삭제 api
        await mutateAsync(id);
        // 화면이동
        navigate('/')
    }

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data && (
                <div>
                    {data.title}
                </div>
            )}
            <button onClick={()=>navigate(`/update/${id}`)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostDetailView;