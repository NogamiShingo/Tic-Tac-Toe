import { Log } from './Log';
import { Board } from './Board';
import { useState } from 'react';
import { Info } from './Info';
import { ClearCheck } from './Func/ClearCheck';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
`;

function App() {
  const createEmptyBoard = (n) => {
    return Array(n).fill().map(() => Array(n).fill(""));
  };
  const n = 3;
  const initialBoard = createEmptyBoard(n);
  const [boardList, setBoardList] = useState([initialBoard]);
  const [playerList, setPlayerList] = useState(['X']);
  const [isFinished, setIsFinished] = useState(false);
  const [turn, setTurn] = useState(0);

  const GameProgress = (i,j) => {
    const nextBoard = boardList[turn].map((r) => [...r]);
    const player = playerList[turn];
    if(nextBoard[i][j]==="" && !isFinished){
      nextBoard[i][j] = player;
      const nextBoardList = boardList.map((r)=>[...r]);
      setBoardList([...nextBoardList.slice(0,turn+1),nextBoard]);
      setPlayerList([...playerList.slice(0,turn+1), player==='X' ? 'O' : 'X']);
      setTurn(turn+1);
      if(ClearCheck(n,nextBoard)){
        setIsFinished(true);
        setPlayerList((playerList)=>{
          playerList[playerList.length-1] = player;
          return playerList;
        });
        return;
      }
    }
  }

  const GoToMove = (num) => {
    if(num!==turn){
      setTurn(num);
      setIsFinished(false);
    }
  }

  return (
    <div>
      <Info player={playerList[turn]} isFinished={isFinished}/>
      <BodyContainer>
        <Board boardState={boardList[turn]} GameProgress={GameProgress}/>
        <Log turns={boardList.length} GoToMove={GoToMove}/>
      </BodyContainer>
    </div>
  );
}

export default App;
