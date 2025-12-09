import { Routes, Route } from 'react-router-dom';
import Questions from "./pages/questions/questions.jsx";

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={< Questions/>} />
            
            
        </Routes>
    );
} 

/*<Route path="/home" element={< Home/>} /> 
<Route path="/results" element={< Results/>} />*/

export default RoutesConfig;