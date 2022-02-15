import * as types from './actionType';
import axios from 'axios';

const getMovies=(users)=>({
    type: types.GET_MOVIE,
    payload:users,
});

const movieDeleted=()=>({
    type: types.Delete_MOVIE 
});

const movieAdded=()=>({
    type: types.ADD_MOVIE, 
});

const movieUpdated=()=>({
    type: types.UPDATE_MOVIE, 
});
const getMovie=(user)=>({
    type: types.GET_SINGLE_MOVIE, 
    payload:user,
});

export const loadMovies=()=>{
 return function(dispatch){
     axios.get(`${process.env.REACT_APP_API}`)
     .then((resp)=>{
         console.log("resp",resp);
         dispatch(getMovies(resp.data));
     })
     .catch((error)=>console.log(error));
 };   
};

export const DeleteMovie=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(movieDeleted());
            dispatch(loadMovies());

        })
        .catch((error)=>console.log(error));
    };   
   };

   export const addMovie=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(movieAdded());

        })
        .catch((error)=>console.log(error));
    };   
   };

   export const getSingleMovie=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(getMovie(resp.data));

        })
        .catch((error)=>console.log(error));
    };   
   };

   export const updateMovie=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(movieUpdated());

        })
        .catch((error)=>console.log(error));
    };   
   };