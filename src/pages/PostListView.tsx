import usePostList from "../hooks/usePostList.ts";
// import {useNavigate} from "react-router-dom";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import {
//     Paper,
//     Table, TableBody,
//     TableCell,
//     tableCellClasses,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Typography
// } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import AppBar from "../components/AppBar.tsx";

const PostListView = () => {
    const navigate = useNavigate()
    const {isLoading, isSuccess, data, error} = usePostList()
    const columns: GridColDef[] = [
        { field: 'title', headerName: 'title', width: 150 },
        { field: 'category', headerName: 'category', width: 100 },
        { field: 'content', headerName: 'content', width: 330 },
        {
            field: 'image',
            headerName: 'image',
            width: 160,
            // description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            valueGetter: (params: GridValueGetterParams) =>
                <img src={`${params.image}`} style={{ width: '100px', height: 'auto'}}/>
                // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [getItem, setItem] = useState({})

    return (
        <>
            {isLoading && <h1>loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {isSuccess &&
                <>
                    {/*<DataGrid*/}
                    {/*rows={data}*/}
                    {/*columns={columns}*/}
                    {/*initialState={{*/}
                    {/*    pagination: {*/}
                    {/*        paginationModel: { page: 0, pageSize: 20 },*/}
                    {/*    },*/}
                    {/*}}*/}
                    {/*pageSizeOptions={[5, 20]}*/}
                    {/*checkboxSelection*/}
                    {/*style={{ color: 'white'}}*/}
                    {/*columnHeaderHeight={90}*/}
                    {/*density={'compact'}*/}
                    {/*onCellClick={(params,details)=>{*/}
                    {/*    setItem({...params});*/}
                    {/*    console.log('getItem? ' , getItem)*/}
                    {/*    console.log('params? ' ,params)*/}
                    {/*    console.log('details? ', details)*/}
                    {/*}}*/}
                    {/*/>*/}
                    {/*<Button onClick={()=> navigate(`/${getItem?.id}`)}>View Detail</Button>*/}
                    {/*<Button onClick={()=> navigate('/new')}>New Post</Button>*/}

                    <TableContainer component={Paper}>
                        <Button onClick={()=> navigate('/new')}>New Post</Button>
                        <Table sx={{ minWidth: 700, maxWidth: 1400, margin: '0 auto', width: '90%' }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>title</StyledTableCell>
                                    <StyledTableCell>category</StyledTableCell>
                                    <StyledTableCell>content</StyledTableCell>
                                    <StyledTableCell>image</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <StyledTableRow onClick={()=> navigate(`/${row.id}`)} key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.title}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.category}</StyledTableCell>
                                        <StyledTableCell>{row.content}</StyledTableCell>
                                        <StyledTableCell>
                                            {/*{row.image}*/}
                                            <img src={row.image} style={{ width: '100px', height: 'auto'}}/>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </>
            }
        </>
    );
};

export default PostListView;