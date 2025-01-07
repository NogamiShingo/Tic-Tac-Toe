import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    margin: 30px;
`;

const TableCell = styled.td`
    border: 1px solid #777777;
    width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    font-weight: bold;
    &:hover {
        background-color: ${props => props.cell==="" ? '#f0f0f0' : 'none'} ;
    }
`;

export const Board = ({boardState,GameProgress}) => {
    return (
        <Table>
            <tbody>
                {boardState.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <TableCell key={colIndex} onClick={()=>GameProgress(rowIndex,colIndex)} cell={cell}>{cell}</TableCell>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}