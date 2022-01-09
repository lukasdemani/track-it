import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div `
    width: 100%;
    height: 70px;

    background: #FFFFFF;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;

    margin-left: -15px;

    color: #52B6FF;
    font-size: 18px;
`;

const TodayButton = styled.div `
    width: 91px;
    height: 91px;

    background: #52B6FF;

    border-style: solid;
    border-width: 5px;
    border-radius: 50px;
    border-color: #52B6FF;
    display: flex;

    position: absolute;
    top: -30px;
    left: 40%;


`;

const CircularProgressbar = styled.div `

`


const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
`;

export {
    Container,
    StyledLink,
    TodayButton
}