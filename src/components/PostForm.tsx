import {Controller, useForm} from "react-hook-form";
import TextInput from "./TextInput.tsx";
import {Button} from "@mui/material";

export type PostFormValues = {
    title: string,
    content: string,
    category: string,
    image: string,
}

export type PostFormProps = {
    initalValues?: PostFormValues;
    onCancel: () => void;
    onSubmit: (value: PostFormValues) => void;
}

const PostForm = ({
    onCancel,
    onSubmit,
    initalValues
}: PostFormProps) =>{
    const {
        control,
        handleSubmit,
        formState: {
            errors,
            isValid,
        }
    } = useForm<PostFormValues>({
        mode: 'onChange',
        defaultValues: initalValues,
    })

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name={'name'}
                    control={control}
                    render={({field}) =>{
                    <TextInput
                        label={'name'}
                        placeholder={'insert name'}
                        {...field} />
                }} />
                <Controller
                    name={'content'}
                    control={control}
                    render={({field}) =>{
                        <TextInput
                            label={'content'}
                            {...field} />
                    }} />
                <Controller
                    name={'category'}
                    control={control}
                    render={({field}) =>{
                        <TextInput
                            label={'category'}
                            {...field} />
                    }} />
                <Controller
                    name={'image'}
                    control={control}
                    render={({field}) =>{
                        <TextInput
                            label={'image'}
                            {...field} />
                    }} />
            </div>
            <Button type={'submit'} >
                New Post
            </Button>
            <Button onClick={onCancel} >
                Cancel
            </Button>
        </form>
    )
}

export default PostForm;