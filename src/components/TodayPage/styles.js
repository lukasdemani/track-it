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

    h5{
        font-size: 18px;
        color: ${props => props.colorText ? '#BABABA' : '#8FC549'};
        padding-top: 5px;
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

    h4 {
        font-size: 20px;
        padding-bottom: 7px;
    }

    p {
        font-size: 13px;
    }

    .current-days{
        color: ${props => props.isSelected ? "#8FC549" : "#666666"};
    }

    .record {
        color: ${props => props.isRecord && "#8FC549"};
    }

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