import usePostCreate from "../hooks/usePostCreate.ts";
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PostForm , {PostFormValues} from "../components/PostForm.tsx";
import { useForm } from "react-hook-form";
import {Post} from "../types/Post.ts";


const PostCreateView = () => {
    const navigate = useNavigate()
    const { isLoading, mutateAsync} = usePostCreate()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {
        register,
        handleSubmit
        // control,
        // formState: {
        //     errors,
        //     isValid
        // }
    } = useForm<PostFormValues>()

    const onSubmit = async (values: PostFormValues) => {
        // console.log('create > async > values? ', values)
        // const newPost  = {
        //     title: values.title,
        //     content: values.content,
        //     category: values.category,
        //     image: values.image,
        // }
        // console.log('newPost ? ', newPost)
        await mutateAsync(values as Post);
        navigate('/', {replace: true})

    }

    // const onCancel = () => {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     navigate(-1, {replace: true})
    // }

    return (
        <div>
            {isLoading && <h1>loading...</h1>}
            {/*{isError && <h1>{isError.message}</h1>}*/}
            <h1>Post Create</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type={'text'}
                    placeholder={'title'}
                    {...register('title', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'content'}
                    {...register('content', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'category'}
                    {...register('category', {required: true})}
                />
                <input
                    type={'text'}
                    placeholder={'image'}
                    {...register('image', {required: true})}
                />
                <input type={'submit'}/>
            </form>
        </div>
    );
};

export default PostCreateView;