import styled from 'styled-components';

const Container = styled.div`
    margin-left: 64px;
    display: flex;
    flex-direction: column
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    margin: 2px;
    border: 1px solid #777777
    border-radius: 2px;
`;

export const Log = ({turns,GoToMove}) => {
    const LogList = [];
    for (let i = 0; i < turns; i++){
        LogList.push(
            <ButtonContainer>
                <div>{i}. </div><Button onClick={()=>GoToMove(i)}>Go to move #{i}</Button>
            </ButtonContainer>
        )
    }

    return(
        <Container>
            {LogList}
        </Container>
    );
}