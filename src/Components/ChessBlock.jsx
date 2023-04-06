import React from 'react'
import { selectPiece } from '../Redux/Actions';

function ChessBlock({setBlockSelected, dispatch, blockSelected,data,index}) {
  

  const pieceSelected =(index)=>{
    console.log("pieceexist activestatus" , data.active)
   if(data.piece.id !== "undefined"){
    console.log("keys")
    dispatch(selectPiece(index))
    setBlockSelected(index);
    
   }

  }
  return (
    <>
    <div  onClick={ ()=> pieceSelected(index)} id="container" className={data.active ? "blockActive":data.backColor}>
    {/*console.log(data.piece.img,index, "image rendered") */}
  {data.piece.img &&  <img alt="pieceImg" src={data.piece.img}/>}
    <span className='spandiv'>{data.id}</span>
    </div>
    
    </>
  )
}

export default ChessBlock