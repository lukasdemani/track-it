import styled from "styled-components";

const Container = styled.div `
    
    height: 100vh;
    
    padding-top: 90px;
    padding-right: 17px;
    padding-left: 17px;
    background-color: #E5E5E5;

    span {
        display: flex;
        justify-content: space-between;
    }

    h1 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
       
    }

    
`;

const Plus = styled.div `
    height: 35px;
    width: 40px;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
`;

const Habit = styled.div `
    width: 100%;
    height: 91px;

    background: #FFFFFF;
    border-radius: 5px;

    color: #666666;
    font-size: 20px;
    padding: 15px;
    position: relative;
    z-index: 0;

    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        font-size: 17px;
    }
`;

const HabitsList = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
`;

const Grid = styled.div `
    width: 300px;
    display: flex;
    gap: 6px;
    padding-top: 8px;
`;

const Day = styled.div `
    width: 30px;
    height: 30px;

    background: ${props => props.isSelected ? '#DBDBDB' : '#ffffff'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
`;


export {
    Container,
    Plus,
    Habit, 
    HabitsList,
    Grid,
    Day
}