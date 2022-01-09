import styled from "styled-components";

const Container = styled.div `
    padding-top: 90px;
    height: 100vh;
    background-color: #E5E5E5;

    padding-left: 20px;
    padding-right: 20px;

    h3 {
        font-size: 23px;
        color: #126BA5;
    };

`;

const HabitsToday = styled.div ` 
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
`;

const HabitInfo = styled.div `
    width: 100%;
    height: 94px;

    background: #FFFFFF;
    border-radius: 5px;
   
    font-size: 20px;
    padding: 13px;
    position: relative;
    color: #666666;

    ion-icon {
        position: absolute;
        right: 13px;
        top: 13px;
        font-size: 69px;
        color: ${props => props.isSelected ? "#8FC549" : "#EBEBEB"}
    }
`;

export {
    Container,
    HabitsToday,
    HabitInfo
}