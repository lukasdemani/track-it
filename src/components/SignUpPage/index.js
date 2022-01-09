import React from "react";
import axios from "axios";
import { Container, Grid, StyledLink } from "./styles";
import { useState } from 'react';
import Input from "../Input";
import Button from "../Button";
import BigLogo from "../BigLogo";


export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    
    function handleSignUp(e) {
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email,
            name,
            image,
            password
        });
        promise.then(response => console.log(response));
        promise.catch(error => console.log(error.response));
    }

    return (
        <Container>
            <BigLogo />
            <form onSubmit={handleSignUp}>
                <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
                <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="senha"/>
                <Input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder="nome"/>
                <Input type='text' onChange={(e) => setImage(e.target.value)} value={image} placeholder="foto"/>
                <Button type="submit">Cadastrar</Button>
            </form>
            <StyledLink to="/">Não tem uma conta? Faça login!</StyledLink>
        </Container>
    );
}