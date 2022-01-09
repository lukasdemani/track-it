import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    height: 180px;
    padding: 18px; 
    margin-top: 10px;
    border-radius: 5px;

    display: ${props => props.displayForm};

    background-color: #FFFFFF;
    position: relative;
`;

const Grid = styled.div `
    width: 100%;
    display: flex;
    gap: 6px;
    padding-top: 10px;
`;

const Day = styled.div `
    width: 30px;
    height: 30px;

    background: ${props => props.isSelected ? '#CFCFCF' : '#ffffff'};
    color: ${props => props.isSelected ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SaveButton = styled.button `
    width: 84px;
    height: 35px;

    background: #52B6FF;
    border-radius: 5px;

    font-size: 16px;
    color: #FFFFFF;
    border: none;
    margin-top: 30px;
    position: absolute;
    right: 16px;
`;

const CancelButton = styled.button `
    width: 84px;
    height: 35px;

    background: #FFFFFF;
    border-radius: 5px;

    font-size: 16px;
    color: #52B6FF;
    border: none;
    margin-top: 30px;
    position: absolute;
    right: 100px;
`;

export {
    Container,
    Grid,
    Day,
    SaveButton,
    CancelButton
}

