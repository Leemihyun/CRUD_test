import {StyledForm} from "./form.styles.ts";
import {Box, Button, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import useLoginUser from "../hooks/useLogin.ts";

type FormValues = {
    email: string;
    password: string;
}

const LoginView = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const { isLoading, mutateAsync, data, error} = useLoginUser()

    const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) =>{
        console.log('loginView > values: ', values)
        await mutateAsync(values);
        navigate('/')
    }
    return (
        <Box
            height="100vh"
            width="100%"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <StyledForm>
                <Typography className={'heading'}>login</Typography>
                {isLoading && <Typography>loading...</Typography>}
                {error && <Typography>{error}</Typography>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={'form-container'}>

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


                        <Button type={'submit'} className={'submit'} variant={'contained'} size={'large'}>Login</Button>
                    </Box>

                </form>
            </StyledForm>

        </Box>
    );
};

export default LoginView;