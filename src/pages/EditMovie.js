import React ,{useState,useEffect}from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from '@mui/material/Button';
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import {  getSingleMovie, updateMovie } from "../redux/actions";
const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:100,
        '& > *':{
            margin:theme.spacing(1),
            width:'45ch',
        },
    },
}));
const EditUser=()=>{
    const classes=useStyles();
    let dispatch=useDispatch();
    const [state,setState]=useState({
        name:"",
        description:"",
        rate:"",
    });

    const [error,setError]=useState("");
    let {id}=useParams();
    const { user }=useSelector((state)=>state.data);
    const {name,description,rate}=state;
    let navigate=useNavigate();
    
    useEffect(()=>{
        dispatch(getSingleMovie(id))
    },[])

    useEffect(()=>{
        if(user){
            setState({...user});
        }
       
    },[user])
    const handleInputChange=(e)=>{
        let{name,value}=e.target;
        setState({...state,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!description||!rate){
            setError("please input all field")
        }
        else{
            dispatch(updateMovie(state,id));
            navigate("/");
            setError("");
        }
    }
    return(
        <div>
            <br/>
          <Button color="error" variant="contained" onClick={()=>navigate("/")}>Go Back</Button>
            <h2>Edit Movie</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Name"onChange={handleInputChange} name="name" value={name ||""} type="text" /> 
            <br/>
            <TextField id="standard-basic" label="description" value={description ||""} name="description" onChange={handleInputChange} type="text" /> 
            <br/>
            <TextField id="standard-basic" label="rate" value={rate ||""} name="rate" onChange={handleInputChange} type="text" /> 
            <br/> <br/>
            <Button color="primary" type="Submit" variant="contained"  onChange={handleInputChange} >Update</Button>

            </form>
            </div>

  );

}

export default EditUser;