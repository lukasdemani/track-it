import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div `
    min-heigth: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
`;


export {
    Container,
    StyledLink
}