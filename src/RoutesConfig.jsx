import { Routes, Route } from 'react-router-dom';
import Questions from "./pages/questions/questions.jsx";
import Home from "./pages/home/home.jsx";
import Results from "./pages/results/results.jsx";

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={< Home/>} /> 
            <Route path="/questions" element={< Questions/>} />
            <Route path="/results" element={< Results/>} />
            
        </Routes>
    );
} 


export default RoutesConfig;