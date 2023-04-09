
const Horse = (index, actionInitial) => {
    const leftArr = [0, 8, 24, 32, 40, 48, 56]
    const rightArr = [7, 15, 23, 31, 39, 47, 55]
    let tempTopLeftIndex = index
    tempTopLeftIndex = tempTopLeftIndex - 17;
    if (tempTopLeftIndex > 0) {
        if (!rightArr.includes(tempTopLeftIndex)) {
            if (!actionInitial[tempTopLeftIndex].piece) {
                actionInitial[tempTopLeftIndex].routes = true;
                console.log('actionInitial[tempTopLeftIndex].piece topleft', actionInitial[tempTopLeftIndex].id)
            } else {
                if (actionInitial[tempTopLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    actionInitial[tempTopLeftIndex].routes = true;
                    actionInitial[tempTopLeftIndex].opponentPiece = true;
                    console.log('opponent piece topleft side')
                } else {
                    console.log('same piece topleft side')
                }
            }
        }

    }

    // cheking topright side

    let tempTopRightIndex = index
    tempTopRightIndex = tempTopRightIndex - 15;
    if (tempTopRightIndex > 0) {
        if (!leftArr.includes(tempTopRightIndex)) {
            if (!actionInitial[tempTopRightIndex].piece) {
                actionInitial[tempTopRightIndex].routes = true;
                console.log('actionInitial[tempTopRightIndex].piece topright', actionInitial[tempTopRightIndex].id)
            } else {
                if (actionInitial[tempTopRightIndex].piece.player !== actionInitial[index].piece.player) {
                    actionInitial[tempTopRightIndex].routes = true;
                    actionInitial[tempTopRightIndex].opponentPiece = true;
                    console.log('opponent piece topright side')
                } else {
                    console.log('same piece topright side')
                }
            }
        } else {
            console.log('out of right side')
        }

    }

    // cheking bottomleft side

    let tempBottomLeftIndex = index
    tempBottomLeftIndex = tempBottomLeftIndex + 15;
    if (tempBottomLeftIndex < 63) {
        if (!rightArr.includes(tempBottomLeftIndex)) {
            if (!actionInitial[tempBottomLeftIndex].piece) {
                actionInitial[tempBottomLeftIndex].routes = true;
                console.log('actionInitial[tempBottomLeftIndex].piece bottomLeft', actionInitial[tempBottomLeftIndex].id)
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    actionInitial[tempBottomLeftIndex].routes = true;
                    actionInitial[tempBottomLeftIndex].opponentPiece = true;
                    console.log('opponent piece bottomLeft side')
                } else {
                    console.log('same piece bottomLeft side')
                }
            }
        } else {
            console.log('out of bottomLeft side')
        }

    }

    // cheking bottomright side

    let tempBottomRightIndex = index
    tempBottomRightIndex = tempBottomRightIndex + 17;
    if (tempBottomRightIndex < 63) {
        if (!rightArr.includes(tempBottomRightIndex)) {
            if (!actionInitial[tempBottomRightIndex].piece) {
                actionInitial[tempBottomRightIndex].routes = true;
                console.log('actionInitial[tempBottomRightIndex].piece bottomLeft', actionInitial[tempBottomRightIndex].id)
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                    actionInitial[tempBottomRightIndex].routes = true;
                    actionInitial[tempBottomRightIndex].opponentPiece = true;
                    console.log('opponent piece bottomLeft side')
                } else {
                    console.log('same piece bottomLeft side')
                }
            }
        } else {
            console.log('out of bottomLeft side')
        }

    }

    // cheking leftBottom side

    let tempLeftBottomIndex = index
    if (!leftArr.includes(index)) {
        tempLeftBottomIndex = tempLeftBottomIndex + 6;
        if (tempLeftBottomIndex < 63) {
            if (!rightArr.includes(tempLeftBottomIndex)) {
                if (!actionInitial[tempLeftBottomIndex].piece) {
                    actionInitial[tempLeftBottomIndex].routes = true;
                    console.log('actionInitial[tempLeftBottomIndex].piece LeftBottom', actionInitial[tempLeftBottomIndex].id)
                } else {
                    if (actionInitial[tempLeftBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        actionInitial[tempLeftBottomIndex].routes = true;
                        actionInitial[tempLeftBottomIndex].opponentPiece = true;
                        console.log('opponent piece LeftBottom side')
                    } else {
                        console.log('same piece LeftBottom side')
                    }
                }
            } else {
                console.log('out of LeftBottom side')
            }
        }
    }else{
        console.log(" included in left arr tempLeftBottomIndex")
    }

     // cheking leftBottom side

     let tempLeftTopIndex = index
     if (!leftArr.includes(index)) {
         tempLeftTopIndex = tempLeftTopIndex - 10;
         if (tempLeftTopIndex > 0) {
             if (!rightArr.includes(tempLeftTopIndex)) {
                 if (!actionInitial[tempLeftTopIndex].piece) {
                     actionInitial[tempLeftTopIndex].routes = true;
                     console.log('actionInitial[tempLeftTopIndex].piece LeftBottom', actionInitial[tempLeftTopIndex].id)
                 } else {
                     if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                         actionInitial[tempLeftTopIndex].routes = true;
                         actionInitial[tempLeftTopIndex].opponentPiece = true;
                         console.log('opponent piece LeftBottom side')
                     } else {
                         console.log('same piece LeftBottom side')
                     }
                 }
             } else {
                 console.log('out of LeftBottom side')
             }
         }
     }else{
         console.log(" included in left arr tempLeftTopIndex")
     }

      // cheking rightBottom side

    let tempRightBottomIndex = index
    if (!rightArr.includes(index)) {
        tempRightBottomIndex = tempRightBottomIndex + 10;
        if (tempRightBottomIndex < 63) {
            if (!leftArr.includes(tempRightBottomIndex)) {
                if (!actionInitial[tempRightBottomIndex].piece) {
                    actionInitial[tempRightBottomIndex].routes = true;
                    console.log('actionInitial[tempRightBottomIndex].piece rightBottom', actionInitial[tempRightBottomIndex].id)
                } else {
                    if (actionInitial[tempRightBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        actionInitial[tempRightBottomIndex].routes = true;
                        actionInitial[tempRightBottomIndex].opponentPiece = true;
                        console.log('opponent piece rightBottom side')
                    } else {
                        console.log('same piece rightBottom side')
                    }
                }
            } else {
                console.log('out of rightBottom side')
            }
        }
    }else{
        console.log(" included in right arr tempRightBottomIndex")
    }

     // cheking rightTop side

     let tempRightTopIndex = index
     if (!rightArr.includes(index)) {
         tempRightTopIndex = tempRightTopIndex - 6;
         if (tempRightTopIndex > 0) {
             if (!leftArr.includes(tempRightTopIndex)) {
                 if (!actionInitial[tempRightTopIndex].piece) {
                     actionInitial[tempRightTopIndex].routes = true;
                     console.log('actionInitial[tempRightTopIndex].piece rightTop', actionInitial[tempRightTopIndex].id)
                 } else {
                     if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                         actionInitial[tempRightTopIndex].routes = true;
                         actionInitial[tempRightTopIndex].opponentPiece = true;
                         console.log('opponent piece rightTop side')
                     } else {
                         console.log('same piece rightTop side')
                     }
                 }
             } else {
                 console.log('out of rightTop side')
             }
         }
     }else{
         console.log(" included in left arr tempRightTopIndex")
     }


}

export default Horse