import Header from "../Header";
import React, { useState, useEffect, useContext } from "react";
import { HabitsToday, HabitInfo, Container } from "./styles";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import Footer from "../Footer";

export default function TodayPage({ image, progress }) {
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
    const colorProgress = (progress==0 ? true : false);
    console.log(colorProgress);

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
        <Container colorText={colorProgress}>
            <Header image={image}/>
            <h3>{todayTitle}</h3>
            <h5 >{
                colorProgress ? 
                    "Nenhum hábito concluído hoje"
                :   
                    `${progress}% dos hábitos concluídos`}        
            </h5>
            <HabitsToday>           
                {habits.map((habit) => (
                    <HabitInfo isSelected={habit.done} isRecord={habit.currentSequence===habit.highestSequence && habit.highestSequence>0}>
                        <h4>{habit.name}</h4>
                        
                        <p>Sequência atual: <span className='current-days'>{habit.currentSequence} dias</span></p>
                        <p>Seu recorde: <span className='record'>{habit.highestSequence} dias</span></p>
                        <ion-icon onClick={() => handleSelected(habit)}  name="checkbox"></ion-icon>
                    </HabitInfo>
                    
                ))}  
            </HabitsToday>
            <Footer progress={progress}/>
        </Container>
    );
}