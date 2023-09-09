import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {StyledForm} from "./form.styles.ts";
import useCreateUser from "../hooks/useSignup.ts";
import {useNavigate} from "react-router-dom";

type FormValues = {
    username: string;
    email: string;
    password: string;
}

const SignUpView = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const { isLoading, mutateAsync, data, error} = useCreateUser()

    const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) =>{
        console.log('SignUpView > values: ', values)
        await mutateAsync(values);
        navigate('/login')
    }

    return (
        <Box
            height="100vh"
            width="100%"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <StyledForm>
                <Typography className={'heading'}>SignUp - mi</Typography>
                {isLoading && <Typography>loading...</Typography>}
                {error && <Typography>{error}</Typography>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={'form-container'}>
                        <TextField
                            className={'input-field'}
                            label={'User Name'}
                            {...register('username', {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Username should be at least 2 character',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Username should be at more 20 character',
                                }
                            })}
                        />
                        {errors.username && <p className={'error-msg'}>{errors.username.message}</p>}

                        <TextField
                            type={'email'}
                            className={'input-field'}
                            label={'Email'}
                            {...register('email')}
                        />
                        {errors.email && <p className={'error-msg'}>{errors.email.message}</p>}

                        <TextField
                            type={'password'}
                            className={'input-field'}
                            label={'password'}
                            {...register('password', {
                                minLength: {
                                    value: 8,
                                    message: 'Username should be at least 8 character',
                                }
                            })}
                        />
                        {errors.password && <p className={'error-msg'}>{errors.password.message}</p>}


                        <Button type={'submit'} className={'submit'} variant={'contained'} size={'large'}>Sign up</Button>
                    </Box>

                </form>
            </StyledForm>

        </Box>
    );
};

export default SignUpView;