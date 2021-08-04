import './App.css';
import React, { useState } from 'react';


function App() {
  const initialState = ["", "", "", "", "", "", "", "", "",]
  const [gameState, setGameState] = useState(initialState);
  const [myChance, setChance] = useState(true);
  const [playCounts, setPlayCounts] = useState(0);
  const [winnerAnnounced, setWinner] = useState(false);
  const loseConditions = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

const resetGame = () => {
  setGameState(initialState);
  setChance(true);
  setPlayCounts(0);
  setWinner(false);

}
  const checkWictory=(arr)=>{
    for( let i=0; i<8; i++ ) {
      const [a, b, c] = loseConditions[i]
       if( arr[a]=== arr[b] && arr[b]=== arr[c] ) {

 setWinner(true);
//  resetGame()
 break;
 
       }}

  }
  const handleChange = (position)=>{
if( !winnerAnnounced) {
    setPlayCounts(count => count + 1);
   const arr=[...gameState];
   arr[position] = myChance ? "X" : "O";
   setChance((chance)=> !chance);
   setGameState(arr);

   if(playCounts >= 4 ){
   checkWictory(arr);
    }
  } else {
    alert("start new game")
  }
   }
  
  return (
    <div style={{ margin: "10% 40%" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>

        <div onClick={() => handleChange(0)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p id={0} style={{ fontSize: "16px" }}> {gameState[0]} </p>
        </div>
        <div id={1} onClick={() => handleChange(1)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[1]} </p>
        </div>
        <div id={2} onClick={() => handleChange(2)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[2]} </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>

        <div id={3} onClick={() => handleChange(3)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[3]} </p>
        </div>
        <div id={4} onClick={() => handleChange(4)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p id={4} style={{ fontSize: "16px" }}> {gameState[4]} </p>
        </div>
        <div id={5} onClick={() => handleChange(5)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[5]} </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div id={6} onClick={() => handleChange(6)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[6]} </p>
        </div>
        <div id={7} onClick={() => handleChange(7)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[7]} </p>
        </div>

        <div id={8} onClick={() => handleChange(8)} style={{ width: "50px", textAlign: "center", height: '50px', border: "5px solid blue" }}>
          <p style={{ fontSize: "16px" }}> {gameState[8]} </p>
        </div>

      </div>
      { winnerAnnounced && <div> Winner is { myChance ?  "Player-O" : "Player-X"}</div>}
    </div>
  );
}

export default App;
