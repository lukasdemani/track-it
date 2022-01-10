import Footer from "../Footer";
import Header from "../Header";
import { Container,Title, Text } from "./styles";

export default function History({ image, progress, setProgress }) {
    return (
        <Container>
            <Header image={image}/>
            <Title>Histórico</Title>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Footer progress={progress} setProgress={setProgress}/>
        </Container>
    );
}