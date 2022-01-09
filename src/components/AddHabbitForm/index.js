import { Container, Grid, Day, SaveButton, CancelButton } from "./styles";
import Input from "../Input";
import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function AddHabbitForm({ displayForm, setDisplayForm, habits, setHabits }) {
    const dayweek = [
        {id:0, label: 'D'},
        {id:1, label: 'S'},
        {id:2, label: 'T'},
        {id:3, label: 'Q'},
        {id:4, label: 'Q'},
        {id:5, label: 'S'},
        {id:6, label: 'S'}
    ];
    const [selectedDays, setSelectedDays] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const { token } = useContext(UserContext);

    function handleDaySelected(day){
        setSelectedDays([...selectedDays, day.id]);
    }
    
    function handleHabit(e){
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
                name: newHabit,
                days: selectedDays
            },{
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
        promise.then(response => {
            setHabits([...habits, response.data])
            setNewHabit('')
            setSelectedDays([])
        });
        promise.catch(error => console.log(error.response));
    }
    
    return (
        <Container displayForm={displayForm}>
            <form onSubmit={handleHabit}>
                <Input type='text' onChange={(e) => setNewHabit(e.target.value)} value={newHabit} />
                <Grid>
                    {dayweek.map((day) => (<Day onClick={() => handleDaySelected(day)} isSelected={selectedDays.includes(day.id)}>{day.label}</Day>))}
                </Grid>
                <CancelButton onClick={() => setDisplayForm('none')}>Cancelar</CancelButton>
                <SaveButton type='submit'>Salvar</SaveButton>
            </form>
        </Container>
    );
}

