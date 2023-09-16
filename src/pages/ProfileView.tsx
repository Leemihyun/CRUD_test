import {StyledForm} from "./form.styles.ts";
import {Box, Button, TextField, Typography} from "@mui/material";
import useGetUserProfile from "../hooks/useGetUserProfile.ts";

const ProfileView = () => {
    const {isLoading, data, error} = useGetUserProfile()
    console.log('data ? ', data)
    return (
        <Box
            height="100vh"
            width="100%"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            <StyledForm>
                <Typography className={'heading'}>Profile</Typography>
                {isLoading && <Typography>loading...</Typography>}
                {error && <Typography>{error.message}</Typography>}
                { data && (<>
                    <Typography>{data.username}</Typography>
                    <Typography>{data.email}</Typography>
                </>)
                }
            </StyledForm>
        </Box>
    );
};

export default ProfileView;