import {useForm} from "react-hook-form";
import {PostFormValues} from "../components/PostForm.tsx";
import {Post} from "../types/Post.ts";
import {useNavigate, useParams} from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail.ts";
import userPostUpdate from "../hooks/userPostUpdate.ts";
import {StyledForm} from "./form.styles.ts";
import {Box, Button, TextField, Typography} from "@mui/material";

type FormValues = {
    id: string;
    title: string;
    content: string;
    category: string;
    image: string;
}

const PostUpdateView = () => {
    const navigate = useNavigate()
    const { id} = useParams<{id: string}>()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>()

    const {isLoading, data, error} = usePostDetail(id!);

    const {mutateAsync} = userPostUpdate()

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
        <>
        <Box
            height="100vh"
            width="100%"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <StyledForm>
                <Typography className={'heading'}>Post Update</Typography>
                {isLoading && <Typography>loading...</Typography>}
                {error && <Typography>{error}</Typography>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={'form-container'}>
                        <TextField
                            type={'text'}
                            className={'input-field'}
                            label={'title'}
                            {...register('title', {
                                required: true,
                            })}
                            defaultValue={data.title}
                        />
                        {errors.title && <p className={'error-msg'}>{errors.title.message}</p>}

                        <TextField
                            type={'text'}
                            className={'input-field'}
                            label={'content'}
                            {...register('content')}
                            defaultValue={data.content}
                        />
                        {errors.content && <p className={'error-msg'}>{errors.content.message}</p>}

                        <TextField
                            type={'text'}
                            className={'input-field'}
                            label={'category'}
                            {...register('category')}
                            defaultValue={data.category}
                        />
                        {errors.category && <p className={'error-msg'}>{errors.category.message}</p>}

                        <TextField
                            type={'text'}
                            className={'input-field'}
                            label={'image'}
                            {...register('image', {
                                // minLength: {
                                //     value: 8,
                                //     message: 'Username should be at least 8 character',
                                // }
                            })}
                            defaultValue={data.image}
                        />
                        {errors.image && <p className={'error-msg'}>{errors.image.message}</p>}


                        <Button type={'submit'} className={'submit'} variant={'contained'} size={'large'}>Update</Button>
                    </Box>

                </form>
            </StyledForm>
        </Box>
        </>
    );
};

export default PostUpdateView;