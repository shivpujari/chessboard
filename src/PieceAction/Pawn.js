import React from 'react'


 function RightFunc (index,actionInitial){
    let rightIdx =0, initialStage =8;
//    if(actionInitial[index].piece.player === 1){
//     rightIdx = 7;
//    }

    if(actionInitial[index+7].id===  initialStage || actionInitial[index-7].id === 1+(initialStage * 0) ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*2 || actionInitial[index-7].id === 1 + (initialStage * 1) ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*3 || actionInitial[index-7].id === 1 + (initialStage * 2)  ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*4 || actionInitial[index-7].id === 1 + (initialStage * 3)  ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*5 || actionInitial[index-7].id === 1 + (initialStage * 4)  ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*6 || actionInitial[index-7].id === 1 + (initialStage * 5)  ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*7 || actionInitial[index-7].id === 1 + (initialStage * 6)  ){
        return false ;
    }else if(actionInitial[index+7].id=== initialStage*8 || actionInitial[index-7].id === 1 + (initialStage * 7)  ){
        return false ;
    }else if(actionInitial[index+7].id > 64 || actionInitial[index-7].id < 0 ){
        return false;
    }else{
        return true;
    }
}

function Pawn(index, actionInitial) {
    if(RightFunc(index, actionInitial)){
        console.log("pawnChecked" )
   
    }else{
        console.log("pawnNotchecked")

    }
}

export default Pawn