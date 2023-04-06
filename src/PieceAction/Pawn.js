import React from 'react'


function RightFunc(index, actionInitial) {
    let rightIdx = 0, initialStage = 8;
   
    if (actionInitial[index].piece.player === 1) {
        console.log("player1")

        if (index + 7 > 64 ) {
            console.log("firstif")
            return false;
        }
        if (actionInitial[index + 7].id === initialStage) {
            console.log(actionInitial[index + 7].id, initialStage, "one")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 2) {
            console.log(actionInitial[index + 7].id, initialStage, "two")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 3) {
            console.log(actionInitial[index + 7].id, initialStage, "3")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 4) {
            console.log(actionInitial[index + 7].id, initialStage, "4")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 5) {
            console.log(actionInitial[index + 7].id, initialStage, "5")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 6) {
            console.log(actionInitial[index + 7].id, initialStage, "6")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 7) {
            console.log(actionInitial[index + 7].id, initialStage, "7")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 8) {
            console.log(actionInitial[index + 7].id, initialStage, "8000")
            return false;
        } else if (actionInitial[index + 7].id > 64) {
            console.log(actionInitial[index + 7].id, initialStage, "one")
            return false;
        } else {
            return true;
        }

    } else if (actionInitial[index].piece.player === 2) {
        if (index - 7 < 0) {
            console.log("seconfi")
            return false;
        }
        console.log("player2")
        if (actionInitial[index - 7].id === 1 + (initialStage * 0)) {
            console.log(actionInitial[index - 7].id, initialStage, "elseone")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 1)) {
            console.log(actionInitial[index - 7].id, initialStage, "elsetwo")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 2)) {
            console.log(actionInitial[index - 7].id, initialStage, "else3")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 3)) {
            console.log(actionInitial[index - 7].id, initialStage, "else4")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 4)) {
            console.log(actionInitial[index - 7].id, initialStage, "else5")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 5)) {
            console.log(actionInitial[index - 7].id, initialStage, "else6")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 6)) {
            console.log(actionInitial[index - 7].id, initialStage, "else7")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 7)) {
            console.log(actionInitial[index - 7].id, initialStage, "else8")
            return false;
        } else if (actionInitial[index - 7].id < 0) {
            console.log(actionInitial[index - 7].id, initialStage, "elseone")
            return false;
        } else {
            return true;
        }
    }

}

function leftFunc(index, actionInitial) {
    let rightIdx = 0, initialStage = 8;
    
   
    if (actionInitial[index].piece.player === 1) {
        if (index + 9 > 64) {
            console.log("leftfirstIF")
            return false; 
        }
        console.log("player1")
        if (actionInitial[index + 9].id === 1 + (initialStage * 0)) {
            console.log(initialStage * 1, 1 + initialStage * 0, "ininini1")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 1)) {
            console.log(initialStage * 2, 1 + initialStage * 1, "ininini2")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 2)) {
            console.log(initialStage * 3, 1 + initialStage * 2, "ininini3")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 3)) {
            console.log(initialStage * 4, 1 + initialStage * 3, "ininini4")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 4)) {
            console.log(initialStage * 5, 1 + initialStage * 4, "ininini5")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 5)) {
            console.log(initialStage * 6, 1 + initialStage * 5, "ininini6")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 6)) {
            console.log(initialStage * 7, 1 + initialStage * 6, "ininini7")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 7)) {
            console.log(initialStage * 8, 1 + initialStage * 7, "ininini8")
            return false;
        } else {
            console.log("pawnElseCheckLeft")
            return true;
        }


    } else if (actionInitial[index].piece.player === 2) {
        console.log("player2")
        if (index - 9 < 0) {
            console.log("leftfirstIF")
            return false; 
        }

        if (actionInitial[index - 9].id === initialStage * 1) {
            console.log()
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 2) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 3) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 4) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 5) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 6) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 7) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 8) {
            return false;

        } else {
            return true;
        }
    }else{
        console.log("lastelse")
    }


}

function Pawn(index, actionInitial) {
    if (RightFunc(index, actionInitial)) {
        console.log("RightpawnChecked")
    } else {
        console.log("RightpawnNotchecked")
    }


    if (leftFunc(index, actionInitial)) {
        console.log("leftPawnCheckrd")
    } else {
        console.log("leftPawnNotCheck")
    }
}
export default Pawn