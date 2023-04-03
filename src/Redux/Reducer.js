import action_type from "./ActionType"


const initialState = [
    

]
export const chessReducer = (state= initialState, action)=>{

switch (action.type){
    case action_type.START:
        return[...state, ...action.payload ]


    default : 
    return state;

}

}
