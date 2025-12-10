import { useState, useEffect, useContext  } from 'react'
import './results.css'
import { useNavigate } from 'react-router-dom';
import { ResultContext } from "../../Resultcontext.jsx";

function Results() {

  const [questions, setQuestions] = useState()
  const [answered, setAnswered] = useState()
  const [error, setError] = useState()
  const {total, right, reset} = useContext(ResultContext);

  const navigate = useNavigate();

  useEffect(() => {
        setQuestions(total)
        setAnswered(right)
    }, []); 




  const  handleClickPlayAgain = async () => {
        reset()
        navigate("/questions")
  }

  const  handleClickChangeDifficult= async () => {
        reset()
        navigate("/")
  }




  if (error) return <p>Error: {error.message}</p>;

  if (!questions) {
  return <p>Loading results</p>;
  }

  return (
    <div className="allContainer">
        <div>
            Congratulations, you have answered rigth {right} of the {total} questions
        </div>
        <div className="buttons-container">
            <button className="result-btn" onClick={() => handleClickPlayAgain()} >
                play again
            </button>
            <button  className="result-btn" onClick={() => handleClickChangeDifficult()}>
                change difficulty
            </button>
        </div>
    </div>
  )
}

export default Results
