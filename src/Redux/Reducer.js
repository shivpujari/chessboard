import action_type from "./ActionType"
import CheckPiece from "../PieceAction/CheckPiece";

const initialState = {
    actionInitial : [],

}

export const chessReducer = (state= initialState, action)=>{

switch (action.type){
    case action_type.START:
        let initialArr = action.payload;
        // return[...state, ...action.payload]
        return {...state, actionInitial:[...initialArr]}
     
    case action_type.BLOCKSELECTED:
        let tempAr = [...state.actionInitial];
        tempAr[action.payload].active = true;
        console.log(tempAr[action.payload], "payload action")
        CheckPiece(action.payload, tempAr)
        
        console.log("return route from reduser", tempAr)
        return {
            ...state,actionInitial:[...tempAr]
        }



        // Pawn();
    default : 
    return state;

}

}
