import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import { DeleteMovie, loadMovies } from "../redux/actions";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from 'react-router-dom';

const useButtonStyles=makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '& > *':{
            margin:theme.spacing(1),
        },
    },
}));

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
  
 
  const useStyles=makeStyles({
        table:{
            minWidth:900,
            marginTop:100,
        },
  });

const Home =()=>{
    const classes=useStyles();
    let dispatch=useDispatch();
    let navigate=useNavigate();
    const buttonStyles=useButtonStyles();
    const {users}=useSelector(state=>state.data)
    useEffect(()=>{
        dispatch(loadMovies());
    },[]);

    const handleDelete=(id)=>{
      if(window.confirm("Are you sure wanted to delete this movie ?")){
        dispatch(DeleteMovie(id));
      }
    }
    return (
        <div>
          <br/>
           <div className={buttonStyles.root} >
                    <Button color="primary" variant="contained" onClick={()=>navigate("/addMovie")}>Add Movie</Button>
             </div>
     <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Descrption</StyledTableCell>
                <StyledTableCell align="center">Rate</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
            </TableHead>
           <TableBody>
 
            {users &&users.map((user) => (
                <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                    {user.name}
                </StyledTableCell>
                <StyledTableCell align="center">{user.description}</StyledTableCell>
                <StyledTableCell align="center">{user.rate}</StyledTableCell>

                <StyledTableCell align="center">
                <div className={buttonStyles.root} >
                   <ButtonGroup variant="contained" aria-label="contained primary button group">
                    <Button style={{marginRight:"5px"}} onClick={()=>handleDelete(user.id)} color="secondary">Delete</Button>
                    <Button color="primary" onClick={()=>navigate(`/EditMovie/${user.id}`)}>Edit</Button>
                    </ButtonGroup>
                    </div>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
        </div>
    )

}

export default Home;