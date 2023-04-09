import Horse from './Horse'
import Hathi from './Hathi'
import Pawn from './Pawn'
import Camel from './Camel'


const CheckPiece = (index, actionInitial) => {
    // Pawn(action.payload, tempAr)
    // Camel(action.payload, tempAr)
    // Horse(action.payload, tempAr)
    let piece = actionInitial[index].piece.pieceId
    if(piece === 1 ||piece === 8 ||piece === 57 ||piece === 64){
        console.log("hathi..")
        Hathi(index, actionInitial)
    }
    else if(piece === 2 ||piece === 7 ||piece === 58 ||piece === 63){
        console.log("horse..")
        Horse(index, actionInitial)
    }
    else if(piece === 3 ||piece === 6 ||piece === 59 ||piece === 62){
        console.log("camel..")
        Camel(index, actionInitial)
    }
    else if(piece === 4 ||piece === 60){
        console.log("wazir..")
        Camel(index, actionInitial)
        Hathi(index, actionInitial)

    }
    else{
              Pawn(index, actionInitial)

    }
    // switch (piece) {
    //     case :
    //         break;
    //     case :
    //         break;
    //     case :
    //         
    //         break;
    //     default:

    // }

}

export default CheckPiece