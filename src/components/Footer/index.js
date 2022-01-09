import { Container, StyledLink, TodayButton } from "./styles";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const percentage = 66;
    return (
        <Container>
            <p>Hábitos</p>
                <TodayButton>
                    <CircularProgressbarWithChildren value={percentage} styles={buildStyles({pathColor: '#ffffff', trailColor: "#52B6FF"})}>
                        <StyledLink to="/hoje">Hoje</StyledLink>
                    </CircularProgressbarWithChildren>
                </TodayButton>
            <p>Histórico</p>
        </Container>
    )
}