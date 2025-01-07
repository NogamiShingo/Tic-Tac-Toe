import { Board } from './Board';
import { useState } from 'react';
import { Info } from './Info';
import { ClearCheck } from './Func/ClearCheck';

function App() {
  const createEmptyBoard = (n) => {
    return Array(n).fill().map(() => Array(n).fill(""));
  };
  const n = 3;
  const initialBoard = createEmptyBoard(n);
  const [boardList, setBoardList] = useState([initialBoard]);
  const [player, setPlayer] = useState('X');
  const [isFinished, setIsFinished] = useState(false);
  const [turn, setTurn] = useState(0);

  const GameProgress = (i,j) => {
    const nextBoard = boardList[turn];
    if(nextBoard[i][j]=="" && !isFinished){
      nextBoard[i][j] = player;
      setBoardList([...boardList,nextBoard]);
      setTurn(turn+1);
      const isCleared = ClearCheck(n,nextBoard);
      if(isCleared){
        setIsFinished(true);
        return;
      }
      setPlayer(player=='X' ? 'O' : 'X');
    }
  }

  return (
    <div>
      <Info player={player} isFinished={isFinished}/>
      <Board boardState={boardList[turn]} GameProgress={GameProgress}/>
    </div>
  );
}

export default App;
