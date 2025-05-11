import TikTakToe from "./TikTakToe";
// import ChessGame from "./Chess";


import React from "react";



function GamePage() {
    return <div className="GamePage">
        <h1 className="TikTakToe__h1">Tik Tak Toe</h1>
        <TikTakToe/>
        {/* <ChessGame/> */}
    </div>
}



export default GamePage