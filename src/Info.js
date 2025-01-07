import styled from 'styled-components';

const Container = styled.div`
    margin: 30px;
    font-size: 24px;
`;

export const Info = ({player, isFinished}) => {
    return (
        <Container>
            {
                isFinished ? 'Winner' : 'Next Player'
            } : 
            {
                player === 'X' ? ' X' : ' O'
            }
        </Container>
    );
}