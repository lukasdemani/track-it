import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import BigLogo from '../BigLogo';
import { Container, StyledLink } from './styles';
import axios from 'axios';
import Input from '../Input';
import Button from '../Button';
import UserContext from '../../contexts/UserContext';
import Loader from "react-loader-spinner";

export default function LoginPage({ setImage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email,
            password
        });
        promise.then(response => {
            setToken(response.data.token)
            setImage(response.data.image)
            navigate('/habitos')
        });
        promise.catch(error => console.log(error.response));
    }

    return (
        <Container>
            <BigLogo />
            <form onSubmit={handleLogin}>
                <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email'/>
                <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='senha'/>
                <Button type="submit">
                    
                    
                        "Entrar"

                    
                    </Button>
            </form>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    );
}

