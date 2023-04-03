import action_type from "./ActionType"
 export const startGame = (payload)=>{
    return {
       type :  action_type.START ,
       payload : payload
    }


}
