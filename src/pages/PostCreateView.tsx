import usePostCreate from "../hooks/usePostCreate.ts";
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PostForm , {PostFormValues} from "../components/PostForm.tsx";
import { useForm } from "react-hook-form";
import {Post} from "../types/Post.ts";
import {StyledForm} from "./form.styles.ts";
import {Box, Button, TextField, Typography} from "@mui/material";

type FormValues = {
    // id: string;
    title: string;
    content: string;
    category: string;
    image?: string;
}

const PostCreateView = () => {
    const navigate = useNavigate()
    const { isLoading, mutateAsync} = usePostCreate()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>()

    const onSubmit = async (values: PostFormValues) => {
        await mutateAsync(values as Post);
        navigate('/', {replace: true})

    }

    // const onCancel = () => {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     navigate(-1, {replace: true})
    // }

    return (
        <>
            <Box
                height="100vh"
                width="80%"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
                margin={'0 auto'}
            >
                <StyledForm>
                    <Typography className={'heading'}>Post Create</Typography>
                    {isLoading && <Typography>loading...</Typography>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className={'form-container'}>
                            <TextField
                                type={'text'}
                                className={'input-field'}
                                label={'title'}
                                {...register('title', {
                                    required: true,
                                })}
                            />
                            {errors.title && <p className={'error-msg'}>{errors.title.message}</p>}

                            <TextField
                                type={'text'}
                                className={'input-field'}
                                label={'content'}
                                {...register('content', {
                                    required: true,})}
                            />
                            {errors.content && <p className={'error-msg'}>{errors.content.message}</p>}

                            <TextField
                                type={'text'}
                                className={'input-field'}
                                label={'category'}
                                {...register('category', {
                                    required: true,})}
                            />
                            {errors.category && <p className={'error-msg'}>{errors.category.message}</p>}

                            <TextField
                                type={'text'}
                                className={'input-field'}
                                label={'image'}
                                {...register('image', {
                                    required: true
                                    // minLength: {
                                    //     value: 8,
                                    //     message: 'Username should be at least 8 character',
                                    // }
                                })}
                            />
                            {errors.image && <p className={'error-msg'}>{errors.image.message}</p>}

                            <Button type={'submit'} className={'submit'} variant={'contained'} size={'large'}>Update</Button>
                        </Box>

                    </form>
                </StyledForm>
            </Box>

        {/*<div>*/}
        {/*    {isLoading && <h1>loading...</h1>}*/}
        {/*    /!*{isError && <h1>{isError.message}</h1>}*!/*/}
        {/*    <h1>Post Create</h1>*/}
        {/*    <form onSubmit={handleSubmit(onSubmit)}>*/}
        {/*        <input*/}
        {/*            type={'text'}*/}
        {/*            placeholder={'title'}*/}
        {/*            {...register('title', {required: true})}*/}
        {/*        />*/}
        {/*        <input*/}
        {/*            type={'text'}*/}
        {/*            placeholder={'content'}*/}
        {/*            {...register('content', {required: true})}*/}
        {/*        />*/}
        {/*        <input*/}
        {/*            type={'text'}*/}
        {/*            placeholder={'category'}*/}
        {/*            {...register('category', {required: true})}*/}
        {/*        />*/}
        {/*        <input*/}
        {/*            type={'text'}*/}
        {/*            placeholder={'image'}*/}
        {/*            {...register('image', {required: true})}*/}
        {/*        />*/}
        {/*        <input type={'submit'}/>*/}
        {/*    </form>*/}
        {/*</div>*/}
        </>
    );
};

export default PostCreateView;