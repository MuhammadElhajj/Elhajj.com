import React, { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import './Chess.css';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [playerColor, setPlayerColor] = useState('white');
  const [difficulty, setDifficulty] = useState('easy');
  const [gameStatus, setGameStatus] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const stockfish = useRef(new Worker(process.env.PUBLIC_URL + '/stockfish.js'));

  // Initialize Stockfish difficulty
  useEffect(() => {
    stockfish.current.postMessage(`setoption name Skill Level value ${
      difficulty === 'easy' ? 0 : difficulty === 'medium' ? 10 : 20
    }`);
  }, [difficulty]);

  // Handle computer moves
  const handleComputerMove = () => {
    if (game.isGameOver()) return;

    stockfish.current.postMessage('position fen ' + game.fen());
    stockfish.current.postMessage('go depth 10');

    const listener = (e) => {
      const message = e.data;
      if (message.startsWith('bestmove')) {
        const move = message.split(' ')[1];
        if (move && move !== '(none)') {
          const newGame = new Chess(game.fen());
          newGame.move(move);
          setGame(newGame);
          checkGameStatus(newGame);
        }
        stockfish.current.removeEventListener('message', listener);
      }
    };

    stockfish.current.addEventListener('message', listener);
  };

  // Check game status
  const checkGameStatus = (currentGame) => {
    if (currentGame.isCheckmate()) {
      setGameStatus(currentGame.turn() === 'w' ? 'Black Wins!' : 'White Wins!');
    } else if (currentGame.isDraw()) {
      setGameStatus('Draw!');
    } else {
      setGameStatus('');
    }
  };

  // Handle square clicks
  const handleSquareClick = (square) => {
    if (gameStatus || (playerColor === 'white' && game.turn() !== 'w') || 
        (playerColor === 'black' && game.turn() !== 'b')) return;

    const piece = game.get(square);
    
    if (piece && piece.color === playerColor[0]) {
      const moves = game.moves({ square, verbose: true });
      setValidMoves(moves.map(move => move.to));
      setSelectedSquare(square);
    } else if (selectedSquare) {
      try {
        const newGame = new Chess(game.fen());
        newGame.move({ from: selectedSquare, to: square });
        setGame(newGame);
        setSelectedSquare(null);
        setValidMoves([]);
        checkGameStatus(newGame);
        
        if (!gameStatus && !newGame.isGameOver()) {
          setTimeout(handleComputerMove, 500);
        }
      } catch (e) {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    }
  };

  // Render chess board
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = String.fromCharCode(97 + col) + (8 - row);
        const piece = game.get(square);
        const isSelected = square === selectedSquare;
        const isValidMove = validMoves.includes(square);

        board.push(
          <div
            key={square}
            className={`square ${((row + col) % 2 === 0) ? 'white' : 'black'} 
              ${isSelected ? 'selected' : ''} ${isValidMove ? 'valid' : ''}`}
            onClick={() => handleSquareClick(square)}
          >
            {piece && <span className={`piece ${piece.color}`}>
              {getPieceSymbol(piece)}
            </span>}
          </div>
        );
      }
    }
    return board;
  };

  // Get piece symbols
  const getPieceSymbol = (piece) => {
    const symbols = {
      'p': '♟', 'n': '♞', 'b': '♝',
      'r': '♜', 'q': '♛', 'k': '♚',
    };
    return symbols[piece.type];
  };

  // Start new game
  const startNewGame = () => {
    setGame(new Chess());
    setGameStatus('');
    setSelectedSquare(null);
    setValidMoves([]);
    setGameStarted(true);
  };

  return (
    <div className="chess-container">
      {!gameStarted ? (
        <div className="game-settings">
          <h2>Game Settings</h2>
          <div className="setting-group">
            <label>Choose Color:</label>
            <button 
              className={playerColor === 'white' ? 'active' : ''}
              onClick={() => setPlayerColor('white')}
            >
              White
            </button>
            <button
              className={playerColor === 'black' ? 'active' : ''}
              onClick={() => setPlayerColor('black')}
            >
              Black
            </button>
          </div>
          
          <div className="setting-group">
            <label>Difficulty Level:</label>
            <button
              className={difficulty === 'easy' ? 'active' : ''}
              onClick={() => setDifficulty('easy')}
            >
              Easy
            </button>
            <button
              className={difficulty === 'medium' ? 'active' : ''}
              onClick={() => setDifficulty('medium')}
            >
              Medium
            </button>
            <button
              className={difficulty === 'hard' ? 'active' : ''}
              onClick={() => setDifficulty('hard')}
            >
              Hard
            </button>
          </div>
          
          <button className="start-button" onClick={startNewGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="board">{renderBoard()}</div>
          <div className="game-info">
            <div className="status">{gameStatus || (game.turn() === 'w' ? 'White\'s Turn' : 'Black\'s Turn')}</div>
            <button onClick={startNewGame}>New Game</button>
            <button onClick={() => setGameStarted(false)}>Change Settings</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChessGame;