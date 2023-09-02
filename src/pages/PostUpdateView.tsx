import {useForm} from "react-hook-form";
import {PostFormValues} from "../components/PostForm.tsx";
import {Post} from "../types/Post.ts";
import {useNavigate, useParams} from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail.ts";
import userPostUpdate from "../hooks/userPostUpdate.ts";
import React from "react";

const PostUpdateView = () => {
    const navigate = useNavigate()

    const { id} = useParams<{id: string}>()

    const {isLoading, isSuccess, data, error} = usePostDetail(id!);

    const {mutateAsync} = userPostUpdate()

    // const initalValues: PostFormValues | undefined = React.useMemo(() => {
    //     if (data){
    //         return {
    //             title: data.title,
    //             content: data.content,
    //             category: data.category,
    //             image: data.image,
    //             }
    //     } else {
    //         return undefined;
    //     }
    // }, [data])

    const {
        register,
        handleSubmit
    } = useForm<PostFormValues>()

    const onSubmit = async (values: PostFormValues) => {
        const updatePost: Post = {
            id: id,
            title: values.title,
            content: values.content,
            category: values.category,
            image: values.image,
        }
        console.log('updatePost? ', updatePost)
        await mutateAsync(updatePost);
        // 화면이동
        navigate('/')
    }

    return (
        <div>
            {isLoading && <h1>loading...</h1>}
            {/*{isError && <h1>{isError.message}</h1>}*/}
            <h1>Post Create</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type={'text'}
                    placeholder={'title'}
                    defaultValue={data.title}
                    {...register('title', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'content'}
                    defaultValue={data.content}
                    {...register('content', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'category'}
                    defaultValue={data.category}
                    {...register('category', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'image'}
                    defaultValue={data.image}
                    {...register('image', {required: true})}
                />
                <input type={'submit'}/>
            </form>
        </div>
    );
};

export default PostUpdateView;