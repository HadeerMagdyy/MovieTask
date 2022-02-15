import * as types from './actionType'
const initialState={
    users:[],
    user:{},
    loading:true,
}

const moviesReducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_MOVIE:
            return{
                ...state,
                users:action.payload,
                loading:false,
            };

        case types.Delete_MOVIE:
            return{
                ...state,
                loading:false,
            };

        case types.GET_SINGLE_MOVIE:
            return{
                ...state,
                user:action.payload,
                loading:false,
            };

         case types.UPDATE_MOVIE:
                return{
                    ...state,
                    loading:false,
                };

        default:
            return state;
    }
};

export default moviesReducers;