import {useNavigate, useParams} from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail.ts";
import usePostDelete from "../hooks/usePostDelete.ts";
import {Box, Button, Stack, Typography} from "@mui/material";

const PostDetailView = () => {
    const navigate = useNavigate()
    const { id} = useParams<{id: string}>()
    const {isLoading, isSuccess, data, error} = usePostDetail(id!);
    const { mutateAsync} = usePostDelete()

    const handleDelete = async () => {
        // 삭제 api
        await mutateAsync(id!);
        // 화면이동
        navigate('/')
    }

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess && data && (
                <Stack direction={'column'}>
                    <Stack direction={'row'} padding={10} >
                        <Box
                        // sx={{ marginX: 10}}
                        >
                            <img src={data.image} style={{width: 300, height: 300, objectFit: 'cover'}}/>
                        </Box>
                        <Stack direction={'column'} px={5} gap={3}>
                            <Typography fontSize={50}>
                            {data.title}
                            </Typography>
                            <Typography>
                               category: {data.category}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack px={10} >
                        <Typography fontWeight={100}>
                            content: {data.content}
                        </Typography>
                    </Stack>

                    <Stack direction={'row'} padding={10} >
                        <Button onClick={()=>navigate(`/update/${id}`)}>Update</Button>
                         <Button onClick={handleDelete}>Delete</Button>
                    </Stack>
                </Stack>
            )}

        </div>
    );
};

export default PostDetailView;