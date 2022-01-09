import Header from "../Header";
import React, { useState, useEffect, useContext } from "react";
import { HabitsToday, HabitInfo, Container } from "./styles";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {
    const [habits, setHabits] = useState([]);
    const { token } = useContext(UserContext);
    const [isSelected, setIsSelected] = useState(false);
    const dayweekTranslator = {
        Sunday: "Domingo",
        Monday: "Segunda",
        Tuesday: "Terça",
        Wednesday: "Quarta",
        Thurday: "Quinta",
        Friday: "Sexta",
        Saturday: "Sábado"
    };
    const dayjs = require('dayjs');
    const today = dayjs();
    const todayEnglish = today.format("dddd");
    const date = today.format("DD/MM")
    const todayPortuguese = dayweekTranslator[todayEnglish];
    const todayTitle = `${todayPortuguese}, ${date}`;


    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => setHabits(response.data) );
        promise.catch(error => console.log(error.response));
    }, []);

    function handleSelected(habit) {
        console.log(habit.id);
        console.log(habit.done);
        console.log(token);
        const request = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        request.then(response => console.log(response));
        request.catch(error => console.log(error.response));
        
    }


    return (
        <Container>
            <Header />
            <h3>{todayTitle}</h3>
            <HabitsToday>           
                {habits.map((habit) => (
                    <HabitInfo>
                        {habit.name}
                        <ion-icon onClick={() => handleSelected(habit)} isSelected={habit.done} name="checkbox"></ion-icon>
                    </HabitInfo>
                    
                ))}  
            </HabitsToday>
            
        </Container>
    );
}