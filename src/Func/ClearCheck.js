export const ClearCheck = (n,boardState) => {
    let isCleared = true;
    for(let i = 0; i < n; i++){
        const cell0 = boardState[i][0];
        if(cell0 === "") continue;
        for(let j = 1; j < n; j++){
            if(boardState[i][j]!==cell0){
                isCleared = false;
                break;
            }
        }
        if(isCleared) return true;
        isCleared = true;
    }

    for(let j = 0; j < n; j++){
        const cell0 = boardState[0][j];
        if(cell0 === "") continue;
        for(let i = 1; i < n; i++){
            if(boardState[i][j]!==cell0){
            isCleared = false;
            break;
            }
        }
        if(isCleared) return true;
        isCleared = true;
    }

    const cellUpLt = boardState[0][0];
    if(cellUpLt !== "") {
        for(let i = 1; i < n; i++){
            if(boardState[i][i] !== cellUpLt){
                isCleared = false;
                break;
            }
        }
        if(isCleared)return true;
    }
    
    isCleared = true;
    const cellUpRt = boardState[0][n-1];
    if(cellUpRt !== "") {
        for(let i = 1; i < n; i++){
            if(boardState[i][n-1-i] !== cellUpRt){
                isCleared = false;
                break;
            }
        }
        if(isCleared)return true;
    }

    return false;
} 