import { useState, useEffect } from 'react'
import './App.css'
import { getQuestions, getDifficulties, getAnswer } from '././services/api';

function App() {
  const [questions, setQuestions] = useState([])
  const [index, setindex] = useState(0)

  useEffect(() => {
        getQuestions()
        .then((response) => setTimeout(() => setQuestions(response), 1000))
        .catch((error) => { setTimeout(() => setError(error), 1000) })  
    }, []); 

  console.log(questions);
  
  return (
    <div className="all">
      <div className="containerQuestion">
        {questions[1].question}
      </div>
      <div className="contenedorDeColumnas">
          <div className="container">
            {questions[1].option1}
          </div>
          <div className="container">
            {questions[1].option2}
          </div>

          <div className="container">
            {questions[1].option3}
          </div>
          <div className="container">
            {questions[1].option4}
          </div>
      </div>
    </div>
  )
}

export default App
