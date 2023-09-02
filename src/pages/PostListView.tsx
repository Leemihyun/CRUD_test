import usePostList from "../hooks/usePostList.ts";

const PostListView = () => {
    const {isLoading, isSuccess, data, error} = usePostList()
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data?.map((item, index) => (
               <div key={index}>
                   <h1>{item.title}</h1>
               </div>
            ))}
        </div>
    );
};

export default PostListView;