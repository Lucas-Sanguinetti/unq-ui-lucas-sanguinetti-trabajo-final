import { Routes, Route } from 'react-router-dom';
import Questions from "./pages/questions/questions.jsx";
import Home from "./pages/home/home.jsx";

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={< Home/>} /> 
            <Route path="/questions/:difficulty" element={< Questions/>} />
            
            
        </Routes>
    );
} 

/*
<Route path="/results" element={< Results/>} />*/

export default RoutesConfig;