import React from 'react'


 function leftFunc (index,actionInitial){
    let leftIdx = 0, initialStage =1;
   if(actionInitial[index].piece.player === 1){
    leftIdx = 8;
   }else{
    
   }


    if(actionInitial[index].id=== 1   ){
        return ;
    }else if(actionInitial[index].id=== 9){
        return ;
    }else if(actionInitial[index].id=== 17){
        return ;
    }else if(actionInitial[index].id=== 25){
        return ;
    }else if(actionInitial[index].id=== 33){
        return ;
    }else if(actionInitial[index].id=== 41){
        return ;
    }else if(actionInitial[index].id=== 49){
        return ;
    }else if(actionInitial[index].id=== 57){
        return ;
    }else{
        if(Object.hasOwn(actionInitial[index + 7].piece.id)  && actionInitial[index+7].piece.player !== actionInitial[index].piece.player ){
           actionInitial[index+ 7].opponentPiece = true;
        
        }
    }

   
}

function Pawn(index, actionInitial) {
    if(actionInitial[index].piece.player === 1){

    }









    // if(actionInitial[index + 7].piece.pieceId  ){
    //     if(actionInitial[index + 7].piece.player !== actionInitial[index].player){
    //       actionInitial[index + 7 ].opponentPiece = true;

    //     }

    // }


 
}

export default Pawn