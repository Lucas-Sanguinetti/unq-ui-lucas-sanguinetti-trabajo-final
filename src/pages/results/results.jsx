import { useState, useEffect, useContext  } from 'react'
import './results.css'
import { ResultContext } from "../../Resultcontext.jsx";

function Results() {

  const [questions, setQuestions] = useState()
  const [answered, setAnswered] = useState()
  const [error, setError] = useState()
  const {total, right} = useContext(ResultContext);


  useEffect(() => {
        setQuestions(total)
        setAnswered(right)
    }, []); 




  const  handleClickPlayAgain = async (option) => {

  }

  const  handleClickChangeDifficult= async (option) => {
        
  }




  if (error) return <p>Error al cargar: {error.message}</p>;

  if (!questions) {
  return <p>Cargando resultados</p>;
  }

  return (
    <div className="all">
        <div>
            Congratulations, you have answered rigth {right} of the {total} questions
        </div>
        <div>
            <button onClick={() => handleClickPlayAgain(difficulty)}>
                play again
            </button>
            <button onClick={() => handleClickChangeDifficult(difficulty)}>
                change difficulty
            </button>
        </div>
    </div>
  )
}

export default Results
