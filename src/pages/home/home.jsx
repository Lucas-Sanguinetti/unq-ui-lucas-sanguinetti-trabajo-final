import { useState, useEffect, useContext } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';
import {getDifficulties} from '../../services/api';
import { DifficultyContext } from "../../Difficultycontext.jsx";

function Home() {
  const [difficulties, setDifficulties] = useState()
  const [error, setError] = useState()
  const {setCurrentDifficulty} = useContext(DifficultyContext);

  const navigate = useNavigate();


  useEffect(() => {
        getDifficulties()
        .then((response) => setTimeout(() => setDifficulties(response), 1000))
        .catch((error) => { setTimeout(() => setError(error), 1000) }) 
    }, []); 

  const  handleClick = async (option) => {
    setCurrentDifficulty(option)
    navigate(`/questions`)
  }


  if (error) return <p>Error: {error.message}</p>;

  if (!difficulties) {
  return <p>Loadign home...</p>;
  }

  return (
    <div className="home-container">
      <div className="home-title">
        Welcome To Preguntados, please select the difficult to play the game
      </div>
      <div className="contenedorDeColumnas">
        <ul className="home-list">
            {difficulties.map((difficulty) => (
                <li key={difficulty} className="home-item"> 
                    <button className="home-btn" onClick={() => handleClick(difficulty)}>
                        {difficulty}
                    </button>
                </li>  
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
