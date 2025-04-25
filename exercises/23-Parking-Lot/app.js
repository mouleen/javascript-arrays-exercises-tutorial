let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
const getParkingLotState = (stateMatrix)=> {
  var state={},auxTotal=0,auxAvailable=0,auxOcuppied=0;
  let sizeX=6; //obtener

  for (let y = 0; y < stateMatrix.length; y++) {
    auxTotal+=stateMatrix[y].filter((item) => item != 0 ).length;
    auxAvailable+=stateMatrix[y].filter((item) => item === 2 ).length;
    auxOcuppied+=stateMatrix[y].filter((item) => item === 1 ).length;
    console.log(auxOcuppied,stateMatrix[y])
  }

  state['occupiedSlots'] = auxOcuppied;
  state['availableSlots'] = auxAvailable;
  state['totalSlots'] = auxTotal;
  return state;
}



console.log(getParkingLotState(parkingState))

/*
// Error fantasma. El bucle es identico al de la solucion pero este da error 
// y lo de arriba no
  for (let y = 0; y < sizeX; y++) {
      for (let x = 0; x < sizeX; x++) {
        console.log(stateMatrix[y][x])
      }
    }*/