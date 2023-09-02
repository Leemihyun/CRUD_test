import usePostList from "../hooks/usePostList.ts";
import {useNavigate} from "react-router-dom";

const PostListView = () => {
    const navigate = useNavigate()
    const {isLoading, isSuccess, data, error} = usePostList()
    return (
        <>
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data?.map((item, index) => (
               <div key={index}>
                   <h1>{item.title}</h1>
                   <button onClick={()=> navigate(`/${item.id}`)}>View Detail</button>
               </div>
            ))}
        </div>
        <div>
            <button onClick={()=> navigate('/new')}>New Post</button>
        </div>
        </>
    );
};

export default PostListView;