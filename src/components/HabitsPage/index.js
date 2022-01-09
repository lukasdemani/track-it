import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Plus, Habit, HabitsList, Grid, Day } from "./styles";
import Header from "../Header";
import AddHabbitForm from "../AddHabbitForm";
import Footer from "../Footer";
import UserContext from "../../contexts/UserContext";

export default function HabitsPage({ image }) {
    const dayweek = [
        {id:0, label: 'D'},
        {id:1, label: 'S'},
        {id:2, label: 'T'},
        {id:3, label: 'Q'},
        {id:4, label: 'Q'},
        {id:5, label: 'S'},
        {id:6, label: 'S'}
    ];
   
    const [habits, setHabits] = useState([]);
    const [displayForm, setDisplayForm] = useState('none');
    const { token } = useContext(UserContext);

    
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => setHabits(response.data));
        promise.catch(error => console.log(error.response));
    }, []);
    
    function handleDelete(id) {
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then();
        promise.catch(error => console.log(error.response)); 
    }
  
    return (
        <Container>
            <Header image={image}/>
            <span>
                <h1>Meus hábitos</h1>
                <Plus onClick={() => setDisplayForm('')}>+</Plus>
            </span>
            <AddHabbitForm displayForm={displayForm} setDisplayForm={setDisplayForm} token={token} color="green"/>
            <HabitsList>
                {habits===[] ? 
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                :
                    habits.map((habit) => (
                    <Habit>
                        {habit.name}
                        <Grid>
                            {dayweek.map((day) => (
                                <Day isSelected={habit.days.includes(day.id)}>
                                    {day.label}
                                </Day>))}
                        </Grid>
                        <ion-icon onClick={() => handleDelete(habit.id)} name="trash-outline"></ion-icon>
                    </Habit>))}
            </HabitsList>
            <Footer></Footer>
        </Container>
    );
}