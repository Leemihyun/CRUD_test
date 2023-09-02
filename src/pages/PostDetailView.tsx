import {useParams} from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail.ts";

const PostDetailView = () => {
    const { id} = useParams<{id: string}>()
    const {isLoading, isSuccess, data, error} = usePostDetail(id);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data && (
                <div>
                    {data.title}
                </div>
            )}
        </div>
    );
};

export default PostDetailView;