

const bgColor = (actionInitial)=>{
    // console.log(actionInitial)
    if(actionInitial.opponentPiece){
        return "opponent"
    }else if(actionInitial.routes || actionInitial.active){
        return "route"
    }else{
        return actionInitial.backColor
    }
}
export default bgColor