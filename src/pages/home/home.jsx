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


  if (error) return <p>Error al cargar: {error.message}</p>;

  if (!difficulties) {
  return <p>Cargando pagina principal...</p>;
  }

  return (
    <div>
      <div>
        Welcome To Preguntados, please select the difficult to play the game
      </div>
      <div className="contenedorDeColumnas">
        <ul>
            {difficulties.map((difficulty) => (
                <li key={difficulty}> 
                    <button onClick={() => handleClick(difficulty)}>
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
