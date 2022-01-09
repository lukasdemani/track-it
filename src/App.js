import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";

export default function App() {
    const [token, setToken] = useState('');
    const [image, setImage] = useState();
    const [progress, setProgress] = useState(20);

    return (
        <UserContext.Provider value={{token, setToken}}>    
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage setImage={setImage}/>} />  
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/habitos" element={<HabitsPage image={image} progress={progress}/>} />
                    <Route path='/hoje' element={<TodayPage image={image} progress={progress}/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}