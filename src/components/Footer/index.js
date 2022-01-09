import { Container, StyledLink, TodayButton } from "./styles";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Footer({ progress }) {
    const { token } = useContext(UserContext);

    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    promise.then(response => console.log(response));
    promise.catch(error => console.log(error.response));

    return (
        <Container>
            <p>Hábitos</p>
                <TodayButton>
                    <CircularProgressbarWithChildren value={progress} styles={buildStyles({pathColor: '#ffffff', trailColor: "#52B6FF"})}>
                        <StyledLink to="/hoje">Hoje</StyledLink>
                    </CircularProgressbarWithChildren>
                </TodayButton>
            <p>Histórico</p>
        </Container>
    )
}