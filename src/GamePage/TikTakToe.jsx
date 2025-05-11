// import React, { useEffect, useState } from "react";
// import './TikTakToe.css'


// function Square ({value , onClick}) {
//     return <button onClick={onClick} className="Square">{value}</button>
// }


// function TikTakToe () {

//     const [squares , setSquares] = useState(Array(9).fill(""))
//     const [isXturn , setIsXturn] = useState(true)
//     const [status , setStatus] = useState('')

//     function handleClick(GETCURRENTSQUARE){
//         console.log(GETCURRENTSQUARE)
//         let cpySquare = [...squares]
//         if (getwinner(cpySquare) || cpySquare[GETCURRENTSQUARE]) return ;
//         cpySquare[GETCURRENTSQUARE] = isXturn ? "X" : "O" ;
//         setIsXturn(!isXturn)
//         setSquares(cpySquare)
//     }


//     function getwinner (squares) {
//         const winningPattrens = [
//             [0,1,2],
//             [3,4,5],
//             [6,7,8],
//             [0,3,6],
//             [1,4,7],
//             [2,5,8],
//             [0,4,8],
//             [2,4,6],
//         ]
// for (let i = 0 ; i< winningPattrens.length ; i++  ) {
//     const [x,y,z] = winningPattrens[i]

//     if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
// return squares[x]
//     }
// }

// return null;
//     }

//     useEffect(()=> {
// if (!getwinner(squares) && squares.every(item => item !== "")) {
//     setStatus("This is Drow ...")
// }else if (getwinner(squares)) {
//     setStatus(`The winner is ${getwinner(squares)}`)
// }else {
//     setStatus(`Player is ${isXturn ? 'X' : 'O'}`)
// }
//     },[squares,isXturn])


//     function handleRestartGame() {
//         setIsXturn(true)
//         setSquares(Array(9).fill(""))
//     }

//     return <div className="TikTakToe">
//         <div className="row">
//             <Square value ={squares[0]} onClick={() => handleClick(0)}/>
//             <Square value ={squares[1]} onClick={() => handleClick(1)}/>
//             <Square value ={squares[2]} onClick={() => handleClick(2)}/>
//         </div>
//         <div className="row"> 
//             <Square value ={squares[3]} onClick={() => handleClick(3)}/>
//             <Square value ={squares[4]} onClick={() => handleClick(4)}/>
//             <Square value ={squares[5]} onClick={() => handleClick(5)}/></div>
//         <div className="row"> 
//             <Square value ={squares[6]} onClick={() => handleClick(6)}/>
//             <Square value ={squares[7]} onClick={() => handleClick(7)}/>
//             <Square value ={squares[8]} onClick={() => handleClick(8)}/></div>
//             <h1 className="Tik__Tak__Toe__Status">{status}</h1>
//             <button onClick={handleRestartGame} className="Restart__Tik__Tak__Toe">Restart</button>
//     </div>
// }


// export default TikTakToe









// import React, { useEffect, useState } from "react";
// import './TikTakToe.css'

// function Square({ value, onClick }) {
//   return <button onClick={onClick} className="Square">{value}</button>;
// }

// function TikTakToe() {
//   const [squares, setSquares] = useState(Array(9).fill(""));
//   const [status, setStatus] = useState('');
//   const [userSymbol, setUserSymbol] = useState(null);
//   const [computerSymbol, setComputerSymbol] = useState(null);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [currentPlayer, setCurrentPlayer] = useState('user');

//   function handleSymbolSelection(selectedSymbol) {
//     setUserSymbol(selectedSymbol);
//     setComputerSymbol(selectedSymbol === 'X' ? 'O' : 'X');
//     setGameStarted(true);
//     setCurrentPlayer(selectedSymbol === 'X' ? 'user' : 'computer');
//   }

//   function getwinner(squares) {
//     const winningPatterns = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8],
//       [0, 3, 6], [1, 4, 7], [2, 5, 8],
//       [0, 4, 8], [2, 4, 6],
//     ];

//     for (let pattern of winningPatterns) {
//       const [a, b, c] = pattern;
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   useEffect(() => {
//     if (gameStarted && currentPlayer === 'computer') {
//       const winner = getwinner(squares);
//       const isBoardFull = squares.every(sq => sq !== "");
      
//       if (!winner && !isBoardFull) {
//         setTimeout(() => {
//           const emptySquares = squares.reduce((acc, curr, index) => {
//             if (curr === "") acc.push(index);
//             return acc;
//           }, []);
          
//           const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
//           const newSquares = [...squares];
//           newSquares[randomIndex] = computerSymbol;
//           setSquares(newSquares);
//           setCurrentPlayer('user');
//         }, 500);
//       }
//     }
//   }, [currentPlayer, gameStarted]);

//   useEffect(() => {
//     const winner = getwinner(squares);
//     const isBoardFull = squares.every(sq => sq !== "");

//     if (winner) {
//       setStatus(`The winner is ${winner}!`);
//     } else if (isBoardFull) {
//       setStatus("It's a draw!");
//     } else {
//       setStatus(currentPlayer === 'user' ? 'Your turn' : 'Computer is thinking...');
//     }
//   }, [squares, currentPlayer]);

//   function handleClick(index) {
//     if (currentPlayer !== 'user' || squares[index] || getwinner(squares)) return;
    
//     const newSquares = [...squares];
//     newSquares[index] = userSymbol;
//     setSquares(newSquares);
//     setCurrentPlayer('computer');
//   }

//   function handleRestartGame() {
//     setSquares(Array(9).fill(""));
//     setCurrentPlayer(userSymbol === 'X' ? 'user' : 'computer');
//   }

//   return (
//     <div className="TikTakToe">
//       {!gameStarted ? (
//         <div className="symbol-selection">
//           <h2>Choose your symbol</h2>
//           <button className="Symbol__button" onClick={() => handleSymbolSelection('X')}>Play as X</button>
//           <button className="Symbol__button" onClick={() => handleSymbolSelection('O')}>Play as O</button>
//         </div>
//       ) : (
//         <>
//           <div className="row">
//             <Square value={squares[0]} onClick={() => handleClick(0)} />
//             <Square value={squares[1]} onClick={() => handleClick(1)} />
//             <Square value={squares[2]} onClick={() => handleClick(2)} />
//           </div>
//           <div className="row">
//             <Square value={squares[3]} onClick={() => handleClick(3)} />
//             <Square value={squares[4]} onClick={() => handleClick(4)} />
//             <Square value={squares[5]} onClick={() => handleClick(5)} />
//           </div>
//           <div className="row">
//             <Square value={squares[6]} onClick={() => handleClick(6)} />
//             <Square value={squares[7]} onClick={() => handleClick(7)} />
//             <Square value={squares[8]} onClick={() => handleClick(8)} />
//           </div>
//           <h1 className="Tik__Tak__Toe__Status">{status}</h1>
//           <div className="controls">
//             <button onClick={handleRestartGame} className="Restart__Tik__Tak__Toe">
//               Restart
//             </button>
//             <button 
//               onClick={() => setGameStarted(false)} 
//               className="Change__Symbol"
//             >
//               Change Symbol
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default TikTakToe;


import React, { useEffect, useState } from "react";
import './TikTakToe.css';

function Square({ value, onClick }) {
  return <button onClick={onClick} className="Square">{value}</button>;
}

function TikTakToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState('');
  const [userSymbol, setUserSymbol] = useState(null);
  const [computerSymbol, setComputerSymbol] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('user');
  const [difficulty, setDifficulty] = useState('easy');

  function handleSymbolSelection(selectedSymbol) {
    setUserSymbol(selectedSymbol);
    setComputerSymbol(selectedSymbol === 'X' ? 'O' : 'X');
  }

  function getwinner(squares) {
    const winningPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // Minimax algorithm for hard difficulty
  function minimax(newSquares, depth, isMaximizing) {
    const winner = getwinner(newSquares);
    
    if (winner === computerSymbol) return { score: 10 - depth };
    if (winner === userSymbol) return { score: depth - 10 };
    if (!newSquares.includes("")) return { score: 0 };

    let best = { score: isMaximizing ? -Infinity : Infinity };

    for (let i = 0; i < newSquares.length; i++) {
      if (!newSquares[i]) {
        newSquares[i] = isMaximizing ? computerSymbol : userSymbol;
        const currentScore = minimax([...newSquares], depth + 1, !isMaximizing);
        newSquares[i] = "";

        if (isMaximizing) {
          if (currentScore.score > best.score) {
            best = { score: currentScore.score, index: i };
          }
        } else {
          if (currentScore.score < best.score) {
            best = { score: currentScore.score, index: i };
          }
        }
      }
    }
    return best;
  }

  const getComputerMove = () => {
    const emptySquares = squares.reduce((acc, curr, index) => {
      if (curr === "") acc.push(index);
      return acc;
    }, []);

    switch(difficulty) {
      case 'hard':
        return minimax([...squares], 0, true).index;
        
      case 'medium':
        // Check for winning move
        for (let i of emptySquares) {
          const testSquares = [...squares];
          testSquares[i] = computerSymbol;
          if (getwinner(testSquares)) return i;
        }
        // Block player's winning move
        for (let i of emptySquares) {
          const testSquares = [...squares];
          testSquares[i] = userSymbol;
          if (getwinner(testSquares)) return i;
        }
        // Fall through to random if no immediate win/block
      
      default: // Easy (random)
        return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    }
  };

  useEffect(() => {
    if (gameStarted && currentPlayer === 'computer') {
      const winner = getwinner(squares);
      const isBoardFull = squares.every(sq => sq !== "");

      if (!winner && !isBoardFull) {
        setTimeout(() => {
          const move = getComputerMove();
          const newSquares = [...squares];
          newSquares[move] = computerSymbol;
          setSquares(newSquares);
          setCurrentPlayer('user');
        }, 500);
      }
    }
  }, [currentPlayer, gameStarted]);

  useEffect(() => {
    const winner = getwinner(squares);
    const isBoardFull = squares.every(sq => sq !== "");

    if (winner) {
      setStatus(`The winner is ${winner}!`);
    } else if (isBoardFull) {
      setStatus("It's a draw!");
    } else {
      setStatus(currentPlayer === 'user' ? 'Your turn' : 'Computer is thinking...');
    }
  }, [squares, currentPlayer]);

  function handleClick(index) {
    if (currentPlayer !== 'user' || squares[index] || getwinner(squares)) return;
    
    const newSquares = [...squares];
    newSquares[index] = userSymbol;
    setSquares(newSquares);
    setCurrentPlayer('computer');
  }

  function handleRestartGame() {
    setSquares(Array(9).fill(""));
    setCurrentPlayer(userSymbol === 'X' ? 'user' : 'computer');
  }

  return (
    <div className="TikTakToe">
      {!gameStarted ? (
        <div className="game-setup">
          <div className="symbol-selection">
            <h2>Choose your symbol</h2>
            <button 
              className={`Symbol__button ${userSymbol === 'X' ? 'selected' : ''}`}
              onClick={() => handleSymbolSelection('X')}
            >
              X
            </button>
            <button 
              className={`Symbol__button ${userSymbol === 'O' ? 'selected' : ''}`}
              onClick={() => handleSymbolSelection('O')}
            >
              O
            </button>
          </div>
          <div className="difficulty-selection">
            <h2 className="difficulty-selection-h2">Select Difficulty</h2>
            <button 
              className={`difficulty__button ${difficulty === 'easy' ? 'selected' : ''}`}
              onClick={() => setDifficulty('easy')}
            >
              Easy
            </button>
            <button 
              className={`difficulty__button ${difficulty === 'medium' ? 'selected' : ''}`}
              onClick={() => setDifficulty('medium')}
            >
              Medium
            </button>
            <button 
              className={`difficulty__button ${difficulty === 'hard' ? 'selected' : ''}`}
              onClick={() => setDifficulty('hard')}
            >
              Hard
            </button>
          </div>
          <button 
            className="start-button"
            onClick={() => setGameStarted(true)}
            disabled={!userSymbol}
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
          <h1 className="Tik__Tak__Toe__Status">{status}</h1>
          <div className="controls">
            <button onClick={handleRestartGame} className="Restart__Tik__Tak__Toe">
              Restart
            </button>
            <button 
              onClick={() => setGameStarted(false)} 
              className="Change__Symbol"
            >
              Change Settings
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TikTakToe;