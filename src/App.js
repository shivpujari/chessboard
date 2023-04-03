import React, { useEffect } from 'react';
import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import { startGame } from './Redux/Actions';
import bishop from './Images/whitebishop.png'
import balckBishop from './Images/blackbishop.png'

function App() {

  const blocks = useSelector((state ) => state.chess);
  const dispatch = useDispatch()
 console.log(blocks, "blocks");

  function chesStart (){
    const tempArr = [];
    let id = 0;

    let bgColor = "";
    let pce = "";
    for( let i =0; i<8; i++){
      for(let j=0; j<8; j++ ){
      
        id++;
        console.log(id, "id")
        if((i + j) % 2 == 0){
          bgColor = "white";
        }else{
          bgColor = "black";
        }

        if(id <= 32){
          pce = balckBishop;
        }else{
          pce=bishop;
        }

        let obj ={
          id:id, 
          backColor: bgColor,
          piece: pce,
          img : "",
          active:"",
          opponentPiece:"",
          routes:"",
          previousStep:"",
          currentStep:""
        }
        tempArr.push(obj);
        
      }
    }
    if(blocks.length === 0 ){
    dispatch(startGame(tempArr))
    }
    console.log(blocks)
  }

  useEffect(()=>{
   chesStart();

  },[])


  return (
    <div className="App">
    {blocks.map((data)=>(
      <>
      <div className={data.backColor}>
      <img src={data.piece}/>
      </div>
      </>
    ))}

    </div>
  )
}

export default App;
