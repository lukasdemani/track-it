import { Container, StyledLink, TodayButton } from "./styles";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Footer({ progress, setProgress }) {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    

    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    promise.then(response => handleProgress(response.data));
    promise.catch(error => console.log(error.response));

    function handleProgress(habits){
        let count = 0;
        let progressValue = 0;
        habits.map((habit) => habit.done && count++);
        progressValue = ((count/habits.length)*100);
        setProgress(progressValue);
    }

    return (
        <Container>
            <StyledLink to='/habitos'><p>Hábitos</p></StyledLink>
                <TodayButton>
                    <CircularProgressbarWithChildren value={progress} styles={buildStyles({pathColor: '#ffffff', trailColor: "#52B6FF"})}>
                        <StyledLink to="/hoje">Hoje</StyledLink>
                    </CircularProgressbarWithChildren>
                </TodayButton>
            <StyledLink to='/historico'><p>Histórico</p></StyledLink>
            
        </Container>
    )
}